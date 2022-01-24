import React, { useRef } from 'react'
import 'animate.css'

function ItemsCatastrales({ dato }) {
  const btnAcordionCatastrales = useRef(null)
  const panelCatastrales = useRef(null)

  const colapsarCatastrales = (e) => {
    e.preventDefault()

    if (
      btnAcordionCatastrales.current.firstChild.className === 'accordion-button'
    ) {
      btnAcordionCatastrales.current.firstChild.className =
        'accordion-button collapsed'
      panelCatastrales.current.className = 'accordion-collapse collapse'
    } else {
      btnAcordionCatastrales.current.firstChild.className = 'accordion-button'
      panelCatastrales.current.className =
        'accordion-collapse collapse show animate__animated animate__fadeIn'
    }
  }

  return (
    <div className="accordion-item">
      <h2
        className="accordion-header"
        onClick={colapsarCatastrales}
        ref={btnAcordionCatastrales}
      >
        <button
          className=" accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseOne"
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-2 icon icon-tabler icon-tabler-file-certificate"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
            <circle cx="6" cy="14" r="3" />
            <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
          </svg>

          <h4>Datos Catastrales</h4>
        </button>
      </h2>
      <div
        ref={panelCatastrales}
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div className="accordion-body ">
          <li key={dato._id} className="list-group-item text-success ">
            <strong className="">matricula:</strong>
            {dato.matricula}
          </li>
          <li key={dato._id} className="list-group-item">
            <strong className="">n° de expediente:</strong>
            {dato.numero_expediente}
          </li>
          <li className="list-group-item">
            <strong>propietario:</strong>
            {dato.propietario}
          </li>
          <li className="list-group-item">
            <strong>telefono:</strong>
            {dato.telefono}
          </li>
          <li className="list-group-item">
            <strong>domicilio:</strong> {dato.domicilio}
          </li>
          <li className="list-group-item">
            <strong>resp. fiscal:</strong> {dato.responsable_fiscal}
          </li>
        </div>
      </div>
    </div>
  )
}

export default ItemsCatastrales
