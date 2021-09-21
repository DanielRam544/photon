const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReservasSchema = new Schema({
    centro: {
        type: String,
        require: true
    },
    lugar: {
        type: String,
        require: true
    },
    area_interes: {
        type: String,
        require: true
    },
    fecha: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('Reserva',ReservasSchema);