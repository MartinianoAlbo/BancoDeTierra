import React, {  useRef, useState } from "react";
import {Link, useNavigate, } from 'react-router-dom';
import 'animate.css';




const BuscarTerreno = ({setTerreno}) => {

  //Generar el State
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const divSpinner = useRef(null);
  const buttonSubmit = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

  };
  
  const handleSubmit = (e) => {
    
    e.preventDefault();

    if(inputValue.trim().length>=1){
        setTerreno([inputValue]);
        setInputValue('')
    }

     setTimeout(() => {
      navigate('/encontrar-terreno')
     }, 1000);
    
    
    // const terrenoEncontrado =  clienteAxios.get(`/terrenos/${numeroPadron}`)
    // .then((respuesta) => {
    //   setTerreno(respuesta.data);
      
    // });

  }

  const mostrarSpinner = () => {


    if(buttonSubmit.current.value === 'true'){
      divSpinner.current.classList.remove('invisible')
      divSpinner.current.classList.add('visible')
    }

  }
  

  return (
    <>
      <h1 className="my-5">Banco de Tierra IPV</h1>

      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link
              to={"/nuevo-terreno"}
              className="btn btn-primary text-uppercase
                   py-2 px-5 font-weight-bold"
            >
              Agregar Terreno
            </Link>
          </div>

          {/* Formulario de Busqueda */}
          <div className="col-md-4  mx-auto animate__animated animate__fadeIn">
            <form
              className="bg-white p-5 bordered shadow"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="padron">Padron</label>

                <input
                  type="number"
                  className="form-control mt-3 form-control-lg mt"
                  id="padron"
                  name="padron"
                  placeholder="Introduzca el numero de Padron"
                  value={inputValue}
                  onChange={handleInputChange}
                />

              </div>
            
              <button
              type="submit"
              className="btn btn-success mt-3 w-100 p-3
                    text-uppercase font-weight-bold"
              ref={buttonSubmit}      
              onClick={mostrarSpinner}
              value={true}
              >
                Buscar
              </button>
                
            </form>

              <div ref={divSpinner} className="invisible">
                <div className="sk-chase mx-auto mt-5" >
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                </div>
              </div>

          </div>
        </div>
      </div>
      </>
  
  );
};

export default BuscarTerreno

