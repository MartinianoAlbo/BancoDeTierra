import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'
import 'animate.css'
import Header from './layouts/header/Header'
import Formulario from './layouts/formulario/Formulario'


function EditarTerreno({ terreno }) {
  useEffect(() => {
    setState(terreno)
  }, [terreno])

   const [state, setState] = useState({})


  const navigate = useNavigate()
  
  //Crear nuevo Terreno
  const EditarTerreno = (e) => {
    e.preventDefault()

    if (state.padron === '') {
      Swal.fire({
        icon: 'error',
        title: 'Padron invalido',
        text: 'Tienes que registrar un numero de padron!',
        footer: 'Intentalo Nuevamente',
      })
    } else {
      Swal.fire({
        title: 'Estas seguro/a de aplicar los cambios?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No Guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          clienteAxios
            .put(`/terrenos/${state._id}`, state)
            .then((resp) => {
              console.log(resp);
              if (resp.statusText === 'OK') {
                Swal.fire('Guardado!', '', 'success')

                setTimeout(() => {
                  navigate('/')
                }, 1500)
              }
            })
            .catch((err) => console.log(err))
        } else if (result.isDenied) {
          Swal.fire('Los cambios no fueron guardados', '', 'info')
        }
      })
    }
  }

  return (
    <>
      <Header />
      <div class="container mt-5 mb-3">
        <div className="row">
          <div className="d-flex justify-content-center mb-5">
            <h3>Editar Terreno</h3>
          </div>
        </div>
      </div>

      <div className="container mt-3 mb-3">
        <div className="row">
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
                className="icon icon-tabler icon-tabler-chevron-left"
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

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6  mx-auto animate__animated animate__fadeIn container-form">
            <form
              className="bg-white p-3 bordered shadow"
              onSubmit={EditarTerreno}
            >
              <Formulario state={state} setState={setState}/>
            
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditarTerreno
