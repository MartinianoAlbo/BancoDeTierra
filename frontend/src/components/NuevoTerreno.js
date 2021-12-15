import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/axios'
// import Swal from 'sweetalert2'


const NuevoTerreno = () => {
  //Generar el State
  const [terreno, guardarTerreno] = useState({
    padron: '',
    matricula: '',
    propietario: '',
    telefono: '',
    domicilio: '',
    responsable_fiscal: '',
    cloacas: 'No Posee',
    gas: 'No Posee',
    agua: 'No Posee',
    alumbrado: 'No Posee',
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
    industrias: '',
    contaminantes: '',
    planes_urbanos: '',
    observaciones: '',
  })

  // Leer datos
  const actualizarState = ({ target }) => {
    let valor = target.value

    if (valor === 'on') {
      valor = 'Si Posee'
      guardarTerreno({
        ...terreno,
        [target.name]: valor,
      })
    } else {
      guardarTerreno({
        ...terreno,
        [target.name]: valor,
      })
    }
  }

  //Crear nuevo Terreno
  const crearNuevoTerreno = (e) => {
    e.preventDefault()

    let errores = []
    if (terreno.padron === '') {
      errores.push({ mensaje: 'error' })
    } else {
      clienteAxios
        .post('/terrenos', terreno)
    
    }
  }

  return (
    <>
      <h1 className="my-5">Agregar Nuevo Terreno</h1>

      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link
              to={'/'}
              className="btn btn-success text-uppercase
                   py-2 px-5 font-weight-bold"
            >
              volver
            </Link>
          </div>

          <div className="col-md-4  mx-auto">
            <form
              className="bg-white p-5 bordered shadow"
              onSubmit={crearNuevoTerreno}
            >
              {/* Padron */}
              <div className="form-group">
                <label htmlFor="padron">Padron</label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  id="padron"
                  name="padron"
                  placeholder="Numero de Padron"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="matricula">Matricula</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="matricula"
                  name="matricula"
                  placeholder="Numero de Matricula"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="propietario">Propietario</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="propietario"
                  name="propietario"
                  placeholder="Nombre Completo del Propietario"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  id="telefono"
                  name="telefono"
                  placeholder="Numero de Teléfono"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="domicilio">Domicilio</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="domicilio"
                  name="domicilio"
                  placeholder="Domicilio"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="responsable_fiscal">Responsable Fiscal</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="responsable_fiscal"
                  name="responsable_fiscal"
                  placeholder="Responsable Fiscal"
                  onChange={actualizarState}
                />
              </div>

              <div className=" form-group d-inline">
                <div className="form-check form-switch ">
                  <label htmlFor="cloacas">Servicio de Cloacas</label>
                  <input
                    type="checkbox"
                    className="form-control
                              form-check-input"
                    id="cloacas"
                    name="cloacas"
                    onChange={actualizarState}
                  />
                  <hr />
                </div>

                <div className="form-check form-switch  ">
                  <label htmlFor="gas">Servicio de Gas</label>
                  <input
                    type="checkbox"
                    className="form-control
                              form-check-input"
                    id="gas"
                    name="gas"
                    onChange={actualizarState}
                  />
                  <hr />
                </div>

                <div className="form-check form-switch ">
                  <label htmlFor="agua">Sistema de Agua Potable</label>
                  <input
                    type="checkbox"
                    className="form-control
                              form-check-input"
                    id="agua"
                    name="agua"
                    onChange={actualizarState}
                  />
                  <hr />
                </div>

                <div className="form-check form-switch ">
                  <label htmlFor="alumbrado">Alumbrado Publico</label>
                  <input
                    type="checkbox"
                    className="form-control
                              form-check-input"
                    id="alumbrado"
                    name="alumbrado"
                    onChange={actualizarState}
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="accesibilidad">Accesibilidad </label>
                <select
                  className="mb-2 form-control form-control-lg"
                  id="accesibilidad"
                  name="accesibilidad"
                  onChange={actualizarState}
                >
                  <option selected="true" disabled="disabled">
                    -- Seleccionar --
                  </option>
                  <option value="Pavimento">Pavimentado </option>
                  <option value="Mejorado">Mejorado </option>
                  <option value="Enrripiado">Enrripiado </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="comisarias">Comisarias</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="comisarias"
                  name="comisarias"
                  placeholder="Seccion"
                />
              </div>

              <div className="form-group">
                <label htmlFor="salud">Centro de Salud</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="salud"
                  name="salud"
                  placeholder="Nombre del Centro"
                />
              </div>

              <div className="form-group">
                <label htmlFor="deporte">Instituciones Deportivas</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="deporte"
                  name="deporte"
                  placeholder="Nombre de la Institucion"
                />
              </div>

              <div className="form-group">
                <label htmlFor="maternal">Jardin Maternal</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="maternal"
                  name="maternal"
                  placeholder="Nombre del Establecimiento"
                />
              </div>

              <div className="form-group">
                <label htmlFor="nivel_inicial">Nivel Inicial</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="nivel_inicial"
                  name="nivel_inicial"
                  placeholder="Nombre del Establecimiento"
                />
              </div>

              <div className="form-group">
                <label htmlFor="primario">Nivel Primario</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="primario"
                  name="primario"
                  placeholder="Nombre del Establecimiento"
                />
              </div>

              <div className="form-group">
                <label htmlFor="secundario">Nivel Secundario</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="secundario"
                  name="secundario"
                  placeholder="Nombre del Establecimiento"
                />
              </div>

              <div className="form-group">
                <label htmlFor="terciario">Nivel Terciario</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="terciario"
                  name="terciario"
                  placeholder="Nombre del Establecimiento"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pasivo_urbano">Pasivos Urbanos</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="pasivo_urbano"
                  name="pasivo_urbano"
                />
              </div>

              <div className="form-group">
                <label htmlFor="industrias">Industria</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="industrias"
                  name="industrias"
                  placeholder="Nombre o Tipo de Industria"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contaminantes">Agentes Contaminantes</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="contaminantes"
                  name="contaminantes"
                  placeholder="Nombre o Tipo de Contaminantes"
                />
              </div>

              <div className="form-group">
                <label htmlFor="planes_urbanos">Planes Urbanos</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="planes_urbanos"
                  name="planes_urbanos"
                  placeholder="Tipo de Plan Urbano"
                />
              </div>

              <div className="form-group">
                <label htmlFor="observaciones">Observaciones</label>
                <textarea
                  className="form-control"
                  name="observaciones"
                  rows="6"
                ></textarea>
              </div>

              <input
                type="submit"
                className="btn btn-primary mt-3 w-100 p-3
                      text-uppercase font-weight-bold"
                value="Guardar"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NuevoTerreno
