const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const terrenosSchema = new Schema({
   padron: {
      type: String,
      trim: true,
   },
   matricula: {
      type: String,
      trim:true
   },
   propietario: {
      type: String,
      trim:true
   },
   telefono: {
      type: String,
      trim: true
   },
   domicilio: {
      type: String,
      trim:true
   },
   responsable_fiscal: {
      type: String,
      trim:true
   },
   cloacas: {
      type: String,
      trim: true
   },
   gas: {
      type: String,
      trim:true
   },
   agua: {
      type: String,
      trim:true
   },
   alumbrado: {
      type: String,
      trim:true
   },
   accesibilidad: {
      type: String,
      trim: true
   },
   comisarias: {
      type: String,
      trim: true
   },
   salud: {
      type: String,
      trim: true
   },
   deporte: {
      type: String,
      trim: true
   },
   maternal: {
      type: String,
      trim: true
   },
   nivel_inicial: {
      type: String,
      trim: true
   },
   primario: {
      type: String,
      trim: true
   },
   secundario: {
      type: String,
      trim: true
   },
   terciarios: {
      type: String,
      trim: true
   },
   pasivo_urbano: {
      type: String,
      trim: true
   },
   industrias: {
      type: String,
      trim: true
   },
   contaminantes: {
      type: String,
      trim: true
   },
   planes_urbanos: {
      type: String,
      trim: true
   },
   observaciones: {
      type: String,
      trim: true
   }
})

//exportar

module.exports = mongoose.model('Terreno', terrenosSchema);