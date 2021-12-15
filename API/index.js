const express = require('express');
const mongoose = require('mongoose'); //conexion con mongoose
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
const cors = require('cors')

//Crear Servidor
const app = express();

//Asegurar la Rest (para que no cualquiera pueda ver los datos solo la direccion especificada)
const whitelist = '[http://localhost:3000]';
const corsOptions = {
   
   origin: (origin, callback) => {
      console.log(origin);
      const existe = whitelist.some(dominio => dominio === origin);
      if(existe){
         callback(null, true);
      }else {
         callback(new Error('No permitido por Cors'));
      }

   }
}

//Habilitar Cors
// app.use(cors(corsOptions));
app.use(cors());

//Contectar mongooDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bancodetierra', {
   useNewUrlParser: true,
   useUnifiedTopology: true,

});

//habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//habilitar routing
app.use('/', routes());


app.listen(4000, () => {
   console.log('Servidor Ok');
})