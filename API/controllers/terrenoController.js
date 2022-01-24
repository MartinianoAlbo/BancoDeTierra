const Terreno = require("../models/Terreno")

//Cuando se crea un nuevo cliente
exports.nuevoTerreno = async (req, res, next) => {

   //TO DO: insertar en la base de datos
   //crear objeto de terrenos 
   const terreno = new Terreno(req.body)

   try {
      await terreno.save();
      res.json({ mensaje: 'Guardado exitosamente' })

   } catch (error) {
      console.log(error);
      next();
   }

}

// Obtener todos los terrenos
exports.obtenerTerrenos = async (req, res, next) => {

   try {

      const terrenos = await Terreno.find({})
      res.json(terrenos)

   } catch (error) {
      console.log(error);
      next();
   }


}

// obtener terreno por padron
exports.obtenerTerreno = async (req, res, next) => {

   try {
      const terreno = await Terreno.findOne({
         "padron": req.params.padron
      });

      res.json(terreno);

   } catch (error) {
      console.log(error);
      next();
   }


}

// actualizar terreno por padron
exports.actualizarTerreno = async (req, res, next) => {

   const {_id}=req.params

   try {
      const terrenoActualizado = await Terreno.findOneAndUpdate(
         {
            _id: _id
         },
         req.body,
         {
            new: true
         }

      )
      res.json(terrenoActualizado)

   } catch (error) {
      console.log(error);
      next();
   }


}

exports.eliminarTerreno = async(req, res, next) => {

   try {
      await Terreno.findByIdAndRemove({
         _id:req.params._id
      })
      res.json({ mensaje: 'Eliminado exitosamente' })
      
   } catch (error) {
      console.log(error);
      next();
   }
}
