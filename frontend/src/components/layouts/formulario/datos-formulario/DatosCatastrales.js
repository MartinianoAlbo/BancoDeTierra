import React from 'react'

const DatosCatastrales = ({ setState, state }) => {


  const ActualizarState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Padron */}

      <div className="form-group">
        <label htmlFor="padron">Padron</label>
        <input
          type="number"
          className="form-control form-control-lg"
          onChange={ActualizarState}
          value={state.padron}
          name="padron"
          placeholder="Numero de Padron"
        />
      </div>

      <div className="form-group">
        <label htmlFor="matricula">Matricula</label>
        <input
          type="text"
          className="form-control form-control-lg"
          onChange={ActualizarState}
          value={state.matricula}
          name="matricula"
          placeholder="Numero de Matricula"
        />
      </div>

      <div className="form-group">
        <label htmlFor="numero_expediente">N° de Expediente</label>
        <input
          type="number"
          className="form-control form-control-lg"
          onChange={ActualizarState}
          value={state.numero_expediente}
          name="numero_expediente"
          placeholder="Numero de Expediente"
        />
      </div>

      <div className="form-group">
        <label htmlFor="propietario">Propietario</label>
        <input
          type="text"
          className="form-control form-control-lg"
          onChange={ActualizarState}
          value={state.propietario}
          name="propietario"
          placeholder="Nombre Completo del Propietario"
        />
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="tel"
          className="form-control form-control-lg"
          onChange={ActualizarState}
          value={state.telefono}
          name="telefono"
          placeholder="Numero de Teléfono"
        />
      </div>

      <div className="form-group">
        <label htmlFor="domicilio">Domicilio</label>
        <input
          type="text"
          className="form-control form-control-lg"
          onChange={ActualizarState}
          value={state.domicilio}
          name="domicilio"
          placeholder="Domicilio"
        />
      </div>

      <div className="form-group">
        <label htmlFor="responsable_fiscal">Responsable Fiscal</label>

        <input
          type="text"
          className="form-control form-control-lg"
          onChange={ActualizarState}
          value={state.responsable_fiscal}
          name="responsable_fiscal"
          placeholder="Responsable Fiscal"
        />
      </div>
    </>
  )
}

export default DatosCatastrales
