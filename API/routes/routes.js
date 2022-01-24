const express = require('express')
const router = express.Router()
const terrenoController = require('../controllers/terrenoController')

module.exports = function () {
  //Agrega nuevos terrenos via POST
  router.post('/terrenos', terrenoController.nuevoTerreno)

  // Obtener Documentos
  router.get('/terrenos', terrenoController.obtenerTerrenos)

  //Obtener Terreno en Especifico por Padron
  router.get('/terrenos/:padron', terrenoController.obtenerTerreno)

  //Actualizar datos de Terreno 
  router.put('/terrenos/:_id', terrenoController.actualizarTerreno)

  //Eliminar terreno por su id
  router.delete('/terrenos/:_id', terrenoController.eliminarTerreno)

  return router
}
