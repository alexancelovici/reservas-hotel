# 📘 Project: Hotel Reservation System

This is a hotel reservation management system built with **Node.js** and **Express.js**. It supports CRUD operations, advanced filters, and API documentation through Swagger.

---

## 🚀 Technologies Used

- Node.js
- Express.js
- UUID
- dotenv
- Swagger (swagger-jsdoc + swagger-ui-express)

---

## 📂 Project Structure

```text
reservas-hotel/
├── controllers/
│   └── reservasController.js
├── data/
│   └── reservas.js
├── routes/
│   └── reservasRoutes.js
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

---

## 🔧 How to Run the Project

1. Clone the repository  
   `git clone <repo-url>`

2. Install dependencies  
   `npm install`

3. Create a `.env` file and define the port, for example:  
   `PORT=3000`

4. Run the server  
   `node server.js`

---

## 📬 Main Endpoints

All endpoints are under:  
`/api/reservas`

### 🟢 CRUD

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/` | Create a new reservation |
| GET | `/` | Get all reservations |
| GET | `/:id` | Get a reservation by ID |
| PUT | `/:id` | Update a reservation by ID |
| DELETE | `/:id` | Delete a reservation by ID |

---

### 🔍 Available Filters (query params)

| Filter | Example |
|--------|---------|
| hotel | `/api/reservas?hotel=Paraiso` |
| estado | `/api/reservas?estado=pendiente` |
| tipo_habitacion | `/api/reservas?tipo_habitacion=suite` |
| num_huespedes | `/api/reservas?num_huespedes=3` |
| date range | `/api/reservas?fecha_inicio=2025-05-01&fecha_fin=2025-05-10` |

---

## ✅ Implemented Validations

- All required fields must be present when creating a reservation
- `num_huespedes` must be a number greater than 0
- Status must be one of: `"pendiente"`, `"pagado"`, `"cancelado"`

---

## 📘 Swagger Documentation

The API documentation is available at:  
`/api-docs`

It includes definitions for all endpoints with example parameters.

---

## ✈️ Optional Render Deployment

If you want to deploy it:

1. Push the code to GitHub
2. Create an account at https://render.com
3. Connect your repo and select:  
   - Start command: `node server.js`
   - Environment: `PORT` with value `3000`

---

## 👨‍💻 Author

- **alexancelovici**
