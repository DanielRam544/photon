const { response } = require("express");
const Tickets = require('../models/Tickets');
const ticketsController = { };

// Optener todas los tickets 
ticketsController.getTickets = async  (req, res) =>{
    const tickets = await Tickets.find();
    res.json(tickets);
}

//crear una reserva 
ticketsController.createTickets = async (req, res) =>{
     console.log(req.body);
     res.json("Recibido");
    // const tickets = new Tickets({
    //     numero: req.body.numero,
    //     folio: req.body.folio,
    //     fechaT: req.body.fechaT,
    //     centro: req.body.centro,
    //     tipo: req.body.tipo,
    //     incidencias: req.body.incidencias,
    //     usuariosT: req.body.usuariosT,
    //     estatus: req.body.estatus,
    //     descripcionT: req.body.descripcionT
    // });
    // await tickets.save();
    // res.json({
    //     'status': 'ticket guardado'
    // });
}

//Actualizar Reservas
ticketsController.updateTickets = async (req, res) =>{
    const { id } = req.params;
    const ticket = {
        numero: req.body.numero,
        folio: req.body.folio,
        fechaT: req.body.folio,
        centro: req.body.centro,
        tipo: req.body.tipo,
        incidencias: req.body.incidencias,
        usuariosT: req.body.usuariosT,
        estatus: req.body.estatus,
        descripcionT: req.body.descripcionT
    }
    // console.log(id);
    // console.log(reservas);
    await Tickets.findByIdAndUpdate(id,{$set: ticket}, {new: true});
    res.json({status: 'Ticket actualizado correctamente'});
}

//consultar una ticket solo con id 
ticketsController.getTicket = async (req, res) =>{
    // console.log(req.params);
    // res.json("Recibido");

    const ticket = await Tickets.findById(req.params.id);
    res.json(ticket);
}

//Eliminar una reserva
ticketsController.delateTickets = async (req, res) =>{
    const { id } = req.params;
    await Tickets.findByIdAndDelete(id);
    res.json({status: 'Ticket eliminado correctamente '});
}
module.exports = ticketsController;