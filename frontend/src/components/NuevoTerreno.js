import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'
import 'animate.css'
import ComprobarPadron from './helpers/ComprobarPadron'
import Header from './layouts/header/Header'
import Formulario from './layouts/formulario/Formulario'

const NuevoTerreno = () => {
  const [state, setState] = useState({
    padron: '',
    matricula: '',
    numero_expediente: '',
    propietario: '',
    telefono: '',
    domicilio: '',
    responsable_fiscal: '',
    cloacas: 'No Tiene',
    gas: 'No Tiene',
    agua: 'No Tiene',
    alumbrado: 'No Tiene',
    accesibilidad: '',
    comisarias: '',
    salud: '',
    deporte: '',
    maternal: '',
    nivel_inicial: '',
    primario: '',
    secundario: '',
    terciarios: '',
    pasivo_urbano: '',
    planes_urbanos: '',
    industrias: '',
    contaminantes: '',
    observaciones: '',
    estado: false,
  })

  //navigate
  const navigate = useNavigate()

  //Crear nuevo Terreno
  const crearNuevoTerreno = (e) => {
    e.preventDefault()

    if (state.padron === '') {
      Swal.fire({
        icon: 'error',
        title: 'No puedes registrar un terreno sin padron',
        text: 'Necesitas un numero de padron para crear un registro nuevo',
        footer: 'Intentalo Nuevamente',
      })

    } else {
      const resultado = ComprobarPadron(state.padron, 'existe')

      resultado
        .then((res) => {
          if (res === false) {
            clienteAxios.post('/terrenos', state)

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'El registro fue guardado con exito',
              showConfirmButton: false,
              timer: 1500,
            })

            setTimeout(() => {
              navigate('/')
            }, 1500)
          } else {
            Swal.fire({
              icon: 'error',
              title: 'El padron ya existe',
              text: 'Ya tienes registrado este numero de padron!',
              footer: 'Intentalo Nuevamente',
            })

          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <Header />
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="d-flex justify-content-center mb-5">
            <h3>Agregar Nuevo Terreno</h3>
          </div>
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link
              to={'/'}
              onClick={(e) => {
                e.preventDefault()

                Swal.fire({
                  title:
                    'Estas seguro/a de volver al inicio?, se perdera el progreso',
                  showDenyButton: true,
                  confirmButtonText: 'Si, Volver',
                }).then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                    setTimeout(() => {
                      navigate('/')
                    }, 500)
                  }
                })
              }}
              className="rounded-circle bg-success m-2 p-2"
              title="volver"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-left"
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
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mx-auto animate__animated animate__fadeIn container-form">
            <form
              className="bg-white p-3 bordered shadow"
              onSubmit={crearNuevoTerreno}
            >
              <Formulario state={state} setState={setState}/>
            
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NuevoTerreno
