const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//Conectamos la base de datos
const { mongoose } = require('./database')

//Configuraciones
app.set('port', process.env.PORT || 3000 );

//Middleware
app.use(morgan('dev')); //Enviar mensajes a consola de lo que el usuario pide de manera externa
app.use(express.json()); //Obtener los datos del usuario en request.body
app.use(cors()); //Permite la comunicación desde fuera del servidor

//Rutas del servidor
app.use('/api/reservas',require('./routes/Reservas.routes'));
app.use('/api/tickets',require('./routes/Tickets.routes'));

//Iniciar servidor
app.listen(app.get('port'), ()=>{
    console.log("Servidor corriendo en el puerto " + app.get('port'));
});