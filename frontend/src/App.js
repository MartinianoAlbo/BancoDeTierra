import React, {useState} from 'react';
import { 
  BrowserRouter, 
  Routes,
  Route
} 
from 'react-router-dom';

//Componentes
import NuevoTerreno from './components/NuevoTerreno';
import BuscarTerreno from './components/BuscarTerreno'
import TerrenoEncontrado from './components/TerrenoEncontrado';




function App() {

  //state de la app
  const [numeroPadron, setTerreno] = useState([]);

  // const {state} = useClienteAxios([]);

  // console.log(numeroPadron);

  // useEffect( ()=> {
  //   const consultarAPI = () => {
      
  //       clienteAxios.get('/terrenos')
  //       .then(respuesta => {
  //        setTerreno(respuesta.data);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       })
  //   }
  //   consultarAPI();
  // }, []);



  return (
    <BrowserRouter>

      <Routes>
        <Route
         path="/"
         element={<BuscarTerreno  setTerreno={setTerreno} />} 
        />

        <Route 
          path='/encontrar-terreno' 
          element={<TerrenoEncontrado numeroPadron={numeroPadron}/>} 
        />
      {/*       
        <Route
          path="/lista-terrenos"
          element={<Terrenos numeroPadron={numeroPadron} />}
        /> */}

        <Route
          path="/nuevo-terreno"
          element={<NuevoTerreno setTerreno={setTerreno} />}
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
