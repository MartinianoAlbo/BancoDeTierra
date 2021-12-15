import { useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const useClienteAxios = (numeroPadron, accion) => {
    
    // console.log(numeroPadron, accion);
    const [state, setState] = useState({
      data:[]
    });

    useEffect(() => {

      if(accion === 'get'){

        numeroPadron.map(num => (
          
          clienteAxios.get(`/terrenos/${num}`)
          .then(respuesta => {
            // console.log(respuesta.data);
              setState({
                data:[respuesta.data]
              });
            })
            .catch(error => {
              console.log(error);
            })
        ))
  
      }
    
    }, [numeroPadron, accion]);


    return state;

}

export default useClienteAxios

