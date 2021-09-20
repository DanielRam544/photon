const { response } = require("express");
const Reservas = require('../models/Reservas');
const reservasController = {

};

// Optener todas las reservas 
reservasController.getReservas = async (req, res) =>{
    const reservas = await Reservas.find();
    res.json(reservas);
}
//crear una reserva 
reservasController.createReserva = async (req, res) =>{
    console.log(req.body);
    res.json("Recibido");

}
//Actualisar Reservas
reservasController.updateReservas = (req, res) =>{

}
//consultar una reserva solo con id 
reservasController.getReserva = (req, res) =>{

}
//Eliminar una reserva
reservasController.delateReservas = (req, res) =>{

}
module.exports = reservasController;