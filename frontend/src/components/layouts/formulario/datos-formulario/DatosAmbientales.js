import React, { useRef } from 'react'

const DatosAmbientales = ({ setState, state }) => {
  const datosAmbientales = useRef(null)

  const ActualizarState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div className="form-group">
        <label htmlFor="pasivo_urbano">Pasivos Urbanos</label>
        <input
          type="text"
          ref={datosAmbientales}
          value={state.pasivo_urbano}
          className="form-control form-control-lg"
          placeholder="Pasivos Urbanos"
          name="pasivo_urbano"
          onChange={ActualizarState}
        />
      </div>

      <div className="form-group">
        <label htmlFor="planes_urbanos">Planes Urbanos</label>
        <input
          type="text"
          ref={datosAmbientales}
          onChange={ActualizarState}
          value={state.planes_urbanos}
          className="form-control form-control-lg"
          name="planes_urbanos"
          placeholder="Tipo de Plan Urbano"
        />
      </div>

      <div className="form-group">
        <label htmlFor="industrias">Industria</label>
        <input
          type="text"
          ref={datosAmbientales}
          value={state.industrias}
          className="form-control form-control-lg"
          name="industrias"
          placeholder="Nombre o Tipo de Industria"
          onChange={ActualizarState}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contaminantes">Agentes Contaminantes</label>
        <input
          type="text"
          ref={datosAmbientales}
          value={state.contaminantes}
          className="form-control form-control-lg"
          name="contaminantes"
          placeholder="Nombre o Tipo de Contaminantes"
          onChange={ActualizarState}
        />
      </div>

      <div className="form-group textObservaciones">
        <label htmlFor="observaciones">Observaciones</label>
        <textarea
          className="form-control"
          value={state.observaciones}
          name="observaciones"
          rows="6"
          onChange={ActualizarState}
        ></textarea>
      </div>
    </>
  )
}

export default DatosAmbientales
