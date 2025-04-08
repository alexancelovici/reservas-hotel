const { v4: uuidv4 } = require("uuid");
let reservas = require("../data/reservas");

// Crear reserva
const crearReserva = (req, res) => {
  const nuevaReserva = {
    id: uuidv4(),
    ...req.body,
  };

  reservas.push(nuevaReserva);
  res.status(201).json(nuevaReserva);
};

// Ver todas (con filtros opcionales)
const obtenerReservas = (req, res) => {
  let resultados = reservas;

  const {
    hotel,
    estado,
    tipo_habitacion,
    num_huespedes,
    fecha_inicio,
    fecha_fin,
  } = req.query;

  if (hotel) {
    resultados = resultados.filter((r) =>
      r.hotel.toLowerCase().includes(hotel.toLowerCase())
    );
  }

  if (estado) {
    resultados = resultados.filter(
      (r) => r.estado.toLowerCase() === estado.toLowerCase()
    );
  }

  if (tipo_habitacion) {
    resultados = resultados.filter(
      (r) =>
        r.tipo_habitacion.toLowerCase() === tipo_habitacion.toLowerCase()
    );
  }

  if (num_huespedes) {
    resultados = resultados.filter(
      (r) => r.num_huespedes == Number(num_huespedes)
    );
  }

  if (fecha_inicio && fecha_fin) {
    resultados = resultados.filter(
      (r) =>
        r.fecha_inicio >= fecha_inicio && r.fecha_fin <= fecha_fin
    );
  }

  res.json(resultados);
};

// Ver una por ID
const obtenerReservaPorId = (req, res) => {
  const { id } = req.params;
  const reserva = reservas.find((r) => r.id === id);
  if (reserva) {
    res.json(reserva);
  } else {
    res.status(404).json({ mensaje: "Reserva no encontrada" });
  }
};

// Actualizar por ID
const actualizarReserva = (req, res) => {
  const { id } = req.params;
  const index = reservas.findIndex((r) => r.id === id);

  if (index !== -1) {
    reservas[index] = { ...reservas[index], ...req.body };
    res.json(reservas[index]);
  } else {
    res.status(404).json({ mensaje: "Reserva no encontrada" });
  }
};

// Eliminar por ID
const eliminarReserva = (req, res) => {
  const { id } = req.params;
  const index = reservas.findIndex((r) => r.id === id);

  if (index !== -1) {
    const eliminada = reservas.splice(index, 1);
    res.json({ mensaje: "Reserva eliminada", reserva: eliminada[0] });
  } else {
    res.status(404).json({ mensaje: "Reserva no encontrada" });
  }
};

module.exports = {
  crearReserva,
  obtenerReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva,
};
