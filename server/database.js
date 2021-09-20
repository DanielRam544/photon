const mongoose = require('mongoose');

//Configuración de los parámetros de la base de datos
url = 'mongodb://localhost/phoinnhub';
/*dbparams = {
    useCreateIndex:true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};*/

mongoose.connect(url, /*dbparams*/
    err=> {
        if (err) throw err;
        console.log('connected to MongoDB')
    });
        /*.then(db => console.log('BD está conectada correctamente'))
        .catch( err => console.log(err));*/

module.exports = mongoose;