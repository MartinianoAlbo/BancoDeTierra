import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ComprobarPadron from './helpers/ComprobarPadron'
import Swal from 'sweetalert2'
import 'animate.css'
import Fab from '@mui/material/Fab'
import clienteAxios from '../config/axios'

const BuscarTerreno = ({ setTerreno }) => {
  //Generar el State
  const [inputValue, setInputValue] = useState('')

  const navigate = useNavigate()
  const divSpinner = useRef(null)
  const buttonSubmit = useRef(null)
  const btnAgregar = useRef(null)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim().length >= 1 || inputValue === '') {
      let resultado = ComprobarPadron(inputValue)

      console.log(inputValue)

      resultado.then((resp) => {
        if (resp === true) {
          clienteAxios
            .get(`/terrenos/${inputValue}`)
            .then((respuesta) =>{
            
            if(respuesta.status === 200){
               setTerreno(respuesta.data)
               setInputValue('')
               mostrarSpinner()
            }
            
            })
            .catch(err => console.log(err))
        } else {
          Swal.fire({
            icon: 'error',
            title: 'El numero de padron no existe',
            text: 'El padron que buscas no esta registrado',
            footer: 'Intentalo Nuevamente',
          })

          setInputValue('')
          divSpinner.current.classList.add('invisible')
        }
      })
    }
  }

  function mostrarSpinner() {

    divSpinner.current.classList.remove('invisible')
    divSpinner.current.classList.add('visible')

    setTimeout(() => {
      navigate('/terreno')
    }, 1000)
  }

  console.log(crypto.randomUUID());
  console.log(Math.random().toString(36).slice(2));


  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
          <div className="d-flex justify-content-center mb-5 ">
            <Link className="navbar-brand " to={'/'}>
              <h3 className="">Banco de Tierra IPV - Tucuman</h3>
            </Link>
          </div>
        </div>

        <div className="row">
          {/* Formulario de Busqueda */}
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-5 mx-auto animate__animated animate__fadeIn container-form">
            <form
              className="bg-white p-5 shadow-lg mb-5"
              onSubmit={handleSubmit}
            >
              <div className="mx-3">
                <h4>Numero de Padron</h4>
              </div>

              {/* Input y btn Buscar */}
              <div className="contenedor-buscador mt-3 mb-4 ">
                <input
                  type="number"
                  className="form-control mx-3 "
                  placeholder="Introduzca el Numero"
                  value={inputValue}
                  onChange={handleInputChange}
                />

                <button
                  type="submit"
                  title="Buscar Registro"
                  className="btn btn-success p-2 w-2
                  text-capitalize col-xs-4 col-sm-2 col-md-2 col-lg-2"
                  ref={buttonSubmit}
                  
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                </button>
              </div>
            </form>

            <div ref={divSpinner} className="invisible">
              <div className="sk-chase mx-auto mt-5">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
              </div>
            </div>

            <div
              className="d-flex justify-content-center mt-5"
              title="Agregar Registro"
            >
              <Fab
                ref={btnAgregar}
                onClick={() => navigate('/nuevo-terreno')}
                className="bg-primary animate__animated animate__bounceIn animate__delay-.6s"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </Fab>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuscarTerreno
