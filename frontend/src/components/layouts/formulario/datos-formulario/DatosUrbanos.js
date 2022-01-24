import React, { useRef, useEffect } from 'react'

const DatosUrbanos = ({ state, setState }) => {


  //chekbox
  const chkGas = useRef(null)
  const chkAgua = useRef(null)
  const chkCloacas = useRef(null)
  const chkAlumbrado = useRef(null)

  //options
  const selectAccesibilidad = useRef(null)
  const optSeleccionar = useRef(null)

  //datos
  const datosUrbanos = useRef(null)

  useEffect(() => {
    
      if (state.padron !== '') {
        // Switchs
        chkCloacas.current.value === 'Si Tiene' &&
          chkCloacas.current.setAttribute('checked', '')
        chkGas.current.value === 'Si Tiene' &&
          chkGas.current.setAttribute('checked', '')
        chkAgua.current.value === 'Si Tiene' &&
          chkAgua.current.setAttribute('checked', '')
        chkAlumbrado.current.value === 'Si Tiene' &&
          chkAlumbrado.current.setAttribute('checked', '')
      }
     
      if (state.accesibilidad === '') {
        optSeleccionar.current.setAttribute('selected', 'true')
      }
    
  }, [state])

  const ActualizarStateSwitchs = (e) => {
    if (e.target.value === 'Si Tiene') {
      e.target.value = 'No Tiene'
      setState({
        ...state,
        [e.target.name]: e.target.value,
      })
    } else if (e.target.value === 'No Tiene') {
      e.target.value = 'Si Tiene'
      setState({
        ...state,
        [e.target.name]: e.target.value,
      })
    }
  }

  const ActualizarState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div className=" d-inline">
        <div className="form-group form-check form-switch ">
          <label htmlFor="cloacas">Servicio de Cloacas</label>
          <input
            name="cloacas"
            type="checkbox"
            ref={chkCloacas}
            onClick={ActualizarStateSwitchs}
            value={state.cloacas}
            className="form-control
                      form-check-input"
          />
          <hr />
        </div>

        <div className="form-group form-check form-switch  ">
          <label htmlFor="gas">Servicio de Gas</label>
          <input
            type="checkbox"
            name="gas"
            ref={chkGas}
            onClick={ActualizarStateSwitchs}
            value={state.gas}
            className="form-control
                      form-check-input"
          />
          <hr />
        </div>

        <div className="form-group form-check form-switch ">
          <label htmlFor="agua">Agua Potable</label>
          <input
            type="checkbox"
            name="agua"
            ref={chkAgua}
            onClick={ActualizarStateSwitchs}
            value={state.agua}
            className="form-control
                      form-check-input"
          />
          <hr />
        </div>

        <div className="form-group form-check form-switch ">
          <label htmlFor="alumbrado">Alumbrado Publico</label>
          <input
            type="checkbox"
            name="alumbrado"
            ref={chkAlumbrado}
            onClick={ActualizarStateSwitchs}
            value={state.alumbrado}
            className="form-control
                      form-check-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="accesibilidad">Accesibilidad </label>
        <select
          className="mb-2 form-control form-control-lg"
          name="accesibilidad"
          onChange={ActualizarState}
          value={state.accesibilidad}
          ref={selectAccesibilidad}
        >
          <option ref={optSeleccionar} disabled={true}>
            -- Seleccionar --
          </option>
          <option selected={false} value="Pavimento">
            Pavimentado
          </option>
          <option selected={false} value="Mejorado">
            Mejorado
          </option>
          <option selected={false} value="Enrripiado">
            Enrripiado
          </option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="comisarias">Comisarias</label>
        <input
          type="text"
          ref={datosUrbanos}
          onChange={ActualizarState}
          value={state.comisarias}
          className="form-control form-control-lg"
          name="comisarias"
          placeholder="Seccion"
        />
      </div>

      <div className="form-group">
        <label htmlFor="salud">Centro de Salud</label>
        <input
          type="text"
          ref={datosUrbanos}
          onChange={ActualizarState}
          value={state.salud}
          className="form-control form-control-lg"
          name="salud"
          placeholder="Nombre del Centro"
        />
      </div>

      <div className="form-group">
        <label htmlFor="deporte">Instituciones Deportivas</label>
        <input
          type="text"
          ref={datosUrbanos}
          onChange={ActualizarState}
          value={state.deporte}
          className="form-control form-control-lg"
          name="deporte"
          placeholder="Nombre de la Institucion"
        />
      </div>

      <div className="form-group">
        <label htmlFor="maternal">Jardin Maternal</label>
        <input
          type="text"
          ref={datosUrbanos}
          onChange={ActualizarState}
          value={state.maternal}
          className="form-control form-control-lg"
          name="maternal"
          placeholder="Nombre del Establecimiento"
        />
      </div>

      <div className="form-group">
        <label htmlFor="nivel_inicial">Nivel Inicial</label>
        <input
          type="text"
          ref={datosUrbanos}
          onChange={ActualizarState}
          value={state.nivel_inicial}
          className="form-control form-control-lg"
          name="nivel_inicial"
          placeholder="Nombre del Establecimiento"
        />
      </div>

      <div className="form-group">
        <label htmlFor="primario">Nivel Primario</label>
        <input
          type="text"
          ref={datosUrbanos}
          onChange={ActualizarState}
          value={state.primario}
          className="form-control form-control-lg"
          name="primario"
          placeholder="Nombre del Establecimiento"
        />
      </div>

      <div className="form-group">
        <label htmlFor="secundario">Nivel Secundario</label>
        <input
          type="text"
          ref={datosUrbanos}
          onChange={ActualizarState}
          value={state.secundario}
          className="form-control form-control-lg"
          name="secundario"
          placeholder="Nombre del Establecimiento"
        />
      </div>

      <div className="form-group">
        <label htmlFor="terciarios">Nivel Terciario</label>
        <input
          type="text"
          ref={datosUrbanos}
          onChange={ActualizarState}
          value={state.terciarios}
          className="form-control form-control-lg"
          name="terciarios"
          placeholder="Nombre del Establecimiento"
        />
      </div>
    </>
  )
}

export default DatosUrbanos
