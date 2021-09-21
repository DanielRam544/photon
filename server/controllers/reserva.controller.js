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
    // console.log(req.body);
    // res.json("Recibido");
    const reserva = new Reservas({
        centro: req.body.centro,
        lugar: req.body.lugar,
        area_interes: req.body.area_interes,
        fecha: req.body.fecha
    });
    await reserva.save();
    res.json({
        'status': 'Reserva guardada'
    });
}

//Actualizar Reservas
reservasController.updateReservas = async (req, res) =>{
    const { id } = req.params;
    const reservas = {
        centro: req.body.centro,
        lugar: req.body.lugar,
        area_interes: req.body.area_interes,
        fecha: req.body.fecha
    }
    // console.log(id);
    // console.log(reservas);
    await Reservas.findByIdAndUpdate(id,{$set: reservas}, {new: true});
    res.json({status: 'Empleado actualizado correctamente'});
}

//consultar una reserva solo con id 
reservasController.getReserva = async (req, res) =>{
    // console.log(req.params);
    // res.json("Recibido");

    const reserva = await Reservas.findById(req.params.id);
    res.json(reserva);
}

//Eliminar una reserva
reservasController.delateReservas = async (req, res) =>{
    const { id } = req.params;
    await Reservas.findByIdAndDelete(id);
    res.json({status: 'Empleado eliminado correctamente '});
}
module.exports = reservasController;