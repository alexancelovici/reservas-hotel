const express = require("express");
const dotenv = require("dotenv");
const reservasRoutes = require("./routes/reservasRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Permite leer JSON
app.get("/", (req, res) => {
    res.send("API de Reservas funcionando correctamente ✅");
  });
  
// Rutas
app.use("/api/reservas", reservasRoutes);

// Servidor en marcha
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
