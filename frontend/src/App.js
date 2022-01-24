import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Componentes
import NuevoTerreno from './components/NuevoTerreno'
import BuscarTerreno from './components/BuscarTerreno'
import Terreno from './components/Terreno'
import EditarTerreno from './components/EditarTerreno'

function App() {
  //state de la app
  const [terreno, setTerreno] = useState()


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuscarTerreno setTerreno={setTerreno} />} />

        <Route path="/terreno" element={<Terreno terreno={terreno} />} />

        <Route path="/nuevo-terreno" element={<NuevoTerreno />} />

        <Route
          path="/editar-terreno"
          element={<EditarTerreno terreno={terreno} />}
        />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
