import React, { useState, useEffect, Suspense } from 'react'
import 'animate.css'
import clienteAxios from '../config/axios'
import ItemsCatastrales from './layouts/lista-items/ItemsCatastrales'
import ItemsUrbanos from './layouts/lista-items/ItemsUrbanos'
import ItemsAmbientales from './layouts/lista-items/ItemsAmbientales'
import Swal from 'sweetalert2'
import { useNavigate, Link } from 'react-router-dom'
import Fab from '@mui/material/Fab'


export default function Items({ info }) {

  const [state, setState] = useState([])

  useEffect(() => {
    setState([info])
  }, [info])

  

  const navigate = useNavigate()

  const EliminarRegistro = (e) => {
    e.preventDefault()

    state.map(({ _id }) => {
      console.log(_id);
      Swal.fire({
        title: 'Estas Seguro/a?',
        text: 'Si eliminas el registro no se podra recuperar!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar',
      }).then((result) => {
        if (result.isConfirmed) {
          clienteAxios
            .delete(`/terrenos/${_id}`)
            .catch((err) => console.log(err))
          Swal.fire('Eliminado!', 'El registro fue eliminado', 'success')

          setTimeout(() => {
            navigate('/')
          }, 1800)
        }
      })
    })
  }

  return (
    <>
      <div className="col-12 mb-5 d-flex justify-content-center">
        <Link
          to={'/'}
          title="volver"
          className="rounded-circle bg-success m-2 p-2 animate__animated animate__fadeIn"
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
      <div className="row d-flex mx-auto text-center justify-content-center p-2 ">
        <div className="card col-12 col-md-4 col-lg-4 mx-2 p-2 shadow card-padron animate__animated animate__fadeIn">
          <h3 className="mb-0">
            Padron
            <span className="mx-2 text-primary">{info.padron}</span>
          </h3>
        </div>
      </div>

      {/* Formulario */}

      <div className="row text-capitalize">
        <form>
          <div className="card shadow animate__animated animate__fadeIn mt-3">
            <div className="d-flex card-header p-3 text-white bg-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2 icon icon-tabler icon-tabler-info-square"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <polyline points="11 12 12 12 12 16 13 16" />
              </svg>
              <h4 className="mt-2">
                <strong>Informacion del Terreno</strong>
              </h4>
            </div>

            <ul key={crypto.randomUUID()} className="list-group">
              {state &&
                state.map((dato) => (
                  <>
                    {/* Acordion*/}

                    <div className="accordion">
                      {/* ItemsCatastrales */}
                      <ItemsCatastrales key={crypto.randomUUID()} dato={dato} />

                      {/* Items Urbanos */}
                      <ItemsUrbanos key={crypto.randomUUID()} dato={dato} />
                      
                      {/* Items Ambientales */}
                      <ItemsAmbientales key={crypto.randomUUID()} dato={dato} />
                    </div>

                    {/* Fin Acordion */}
                  </>
                ))}
            </ul>
          </div>

          {/* Botones flotantes */}

          <div className="row">
            <div className="col-md-4">
              <div className="fixed-bottom-personalizado">
                <div
                  className="d-grid justify-content-end
                 animate__animated animate__bounceIn "
                  data-toggle="tooltip"
                >
                  <Fab
                    title="Eliminar Registro"
                    className=" bg-danger"
                    onClick={EliminarRegistro}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-trash"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </Fab>

                  <Fab
                    title="Editar Registro"
                    className="bg-primary mt-4"
                    onClick={() =>{ navigate(`/editar-terreno`)}}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-pencil"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                    </svg>
                  </Fab>
                </div>
              </div>
            </div>
          </div>
          {/* Fin Botones Flotantes */}
        </form>
      </div>
    </>
  )
}
