const mongoose = require('mongoose');

const { Schema } = mongoose;

const TicketsSchema = new Schema({
    numero: {
        type: Number,
        require: true
    },
    folio: {
        type: Number,
        require: true
    },
    fechaT: {
        type: String,
        require: true
    },
    centro: {
        type: String,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    incidencia: {
        type: String,
        require: true
    },
    usuariosT: {
        type: String,
        require: true
    },
    estatus: {
        type: String,
        require: true
    },
    descripcionT: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Tickets',TicketsSchema);