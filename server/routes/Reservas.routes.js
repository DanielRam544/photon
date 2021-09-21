const express = require('express');
const router = express.Router();

const reservas = require('../controllers/reserva.controller');

//Definimos la ruta principal de la tabla usuarios

router.get('/', reservas.getReservas);
//Crear una reserva
router.post('/', reservas.createReserva);
//obtener una reserva
router.get('/:id', reservas.getReserva);
//actualizar un empleado
router.put('/:id', reservas.updateReservas);
//Eliminar una reserva
router.delete('/:id',reservas.delateReservas);


module.exports = router;