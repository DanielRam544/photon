const express = require('express');
const router = express.Router();

const tickets = require('../controllers/tickets.controller');

//Definimos la ruta principal de la tabla usuarios

// router.get('/', reservas.getReservas);
// //Crear una reserva
// router.post('/', reservas.createReserva);
// //obtener una reserva
// router.get('/:id', reservas.getReserva);
// //actualizar un empleado
// router.put('/:id', reservas.updateReservas);
// //Eliminar una reserva
// router.delete('/:id',reservas.delateReservas);

router.get('/', tickets.getTickets);
//Crear una reserva
router.post('/', tickets.createTickets);
//obtener una reserva
router.get('/:id', tickets.getTicket);
//actualizar un empleado
router.put('/:id', tickets.updateTickets);
//Eliminar una reserva
router.delete('/:id',tickets.delateTickets);



module.exports = router;