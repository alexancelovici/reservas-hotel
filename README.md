# 📘 Proyecto: Sistema de Reservas Hoteleras

Este es un sistema de gestión de reservas hoteleras desarrollado con **Node.js** y **Express.js**, que permite realizar operaciones CRUD, aplicar filtros avanzados y consultar la documentación vía Swagger.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- UUID
- dotenv
- Swagger (swagger-jsdoc + swagger-ui-express)

---

## 📂 Estructura del proyecto

reservas-hotel/ ├── controllers/ │ └── reservasController.js ├── data/ │ └── reservas.js ├── routes/ │ └── reservasRoutes.js ├── .env ├── .gitignore ├── package.json ├── server.js

---

## 🔧 Cómo ejecutar el proyecto

1. Clona el repositorio  
   `git clone <url-del-repo>`

2. Instala dependencias  
   `npm install`

3. Crea un archivo `.env` y define el puerto (por ejemplo):  

4. Ejecuta el servidor  
`node server.js`

---

## 📬 Endpoints principales

Todos los endpoints están bajo:  

### 🟢 CRUD

| Método | Endpoint              | Descripción                         |
|--------|------------------------|-------------------------------------|
| POST   | `/`                    | Crear nueva reserva                 |
| GET    | `/`                    | Obtener todas las reservas          |
| GET    | `/:id`                 | Obtener una reserva por ID          |
| PUT    | `/:id`                 | Actualizar reserva por ID           |
| DELETE | `/:id`                 | Eliminar reserva por ID             |

---

### 🔍 Filtros disponibles (query params)

| Filtro             | Ejemplo                                         |
|--------------------|-------------------------------------------------|
| hotel              | `/api/reservas?hotel=Paraíso`                   |
| estado             | `/api/reservas?estado=pendiente`               |
| tipo_habitacion    | `/api/reservas?tipo_habitacion=suite`          |
| num_huespedes      | `/api/reservas?num_huespedes=3`                |
| rango de fechas    | `/api/reservas?fecha_inicio=2025-05-01&fecha_fin=2025-05-10` |

---

## ✅ Validaciones implementadas

- Todos los campos obligatorios deben estar presentes al crear una reserva
- `num_huespedes` debe ser un número mayor a 0
- El estado debe ser uno de: `"pendiente"`, `"pagado"`, `"cancelado"`

---

## 📘 Documentación Swagger

La documentación de la API está disponible en:  

Incluye definición de todos los endpoints con ejemplo de parámetros.

---

## ✈️ (Opcional) Despliegue en Render

Si querés subirlo:

1. Subí el código a GitHub
2. Creá cuenta en https://render.com
3. Conectá tu repo y seleccioná:  
   - Start command: `node server.js`
   - Environment: `PORT` con valor `3000`

---

## 👨‍💻 Autor

- **alexancelovici**

