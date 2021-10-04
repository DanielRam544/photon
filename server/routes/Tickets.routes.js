const express = require('express');
const router = express.Router();

// router.get('/',(req, res)=>{
//     res.send('Hola tickets');
// });

const tickets = require('../controllers/tickets.controller');

//Definimos la ruta principal de la tabla usuarios
router.get('/', tickets.getTickets);
//Crear una ticket
router.post('/', tickets.createTickets);
//obtener una ticket
router.get('/:id', tickets.getTicket);
//actualizar un ticket
router.put('/:id', tickets.updateTickets);
//Eliminar una ticket
router.delete('/:id',tickets.delateTickets);



 module.exports = router;