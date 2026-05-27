const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Hotel Reservations API",
    version: "1.0.0",
    description: "REST API for hotel reservations with CRUD operations and filters.",
  },
  servers: [{ url: "http://localhost:3000" }],
  components: {
    schemas: {
      Reserva: {
        type: "object",
        required: ["hotel", "tipo_habitacion", "num_huespedes", "fecha_inicio", "fecha_fin", "estado"],
        properties: {
          id: { type: "string", example: "7bdbb27b-0b82-4cb3-9a14-ec99f79a9a5c" },
          hotel: { type: "string", example: "Paraiso" },
          tipo_habitacion: { type: "string", example: "suite" },
          num_huespedes: { type: "number", example: 2 },
          fecha_inicio: { type: "string", example: "2025-05-01" },
          fecha_fin: { type: "string", example: "2025-05-10" },
          estado: { type: "string", enum: ["pendiente", "pagado", "cancelado"], example: "pendiente" },
        },
      },
    },
  },
  paths: {
    "/api/reservas": {
      get: {
        summary: "Get reservations",
        parameters: [
          { name: "hotel", in: "query", schema: { type: "string" } },
          { name: "estado", in: "query", schema: { type: "string" } },
          { name: "tipo_habitacion", in: "query", schema: { type: "string" } },
          { name: "num_huespedes", in: "query", schema: { type: "number" } },
          { name: "fecha_inicio", in: "query", schema: { type: "string" } },
          { name: "fecha_fin", in: "query", schema: { type: "string" } },
        ],
        responses: { 200: { description: "Reservation list" } },
      },
      post: {
        summary: "Create a reservation",
        requestBody: {
          required: true,
          content: { "application/json": { schema: { $ref: "#/components/schemas/Reserva" } } },
        },
        responses: { 201: { description: "Reservation created" }, 400: { description: "Validation error" } },
      },
    },
    "/api/reservas/{id}": {
      get: {
        summary: "Get a reservation by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Reservation found" }, 404: { description: "Reservation not found" } },
      },
      put: {
        summary: "Update a reservation by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          required: true,
          content: { "application/json": { schema: { $ref: "#/components/schemas/Reserva" } } },
        },
        responses: { 200: { description: "Reservation updated" }, 404: { description: "Reservation not found" } },
      },
      delete: {
        summary: "Delete a reservation by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Reservation deleted" }, 404: { description: "Reservation not found" } },
      },
    },
  },
};

module.exports = swaggerJSDoc({ swaggerDefinition, apis: [] });
