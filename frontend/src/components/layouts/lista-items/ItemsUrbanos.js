import React, { useRef } from 'react'
import 'animate.css'

function ItemsUrbanos({ dato }) {
  const btnAcordionUrbanos = useRef(null)
  const panelUrbanos = useRef(null)

  const colapsarUrbanos = (e) => {
    e.preventDefault()

    if (
      btnAcordionUrbanos.current.firstChild.className === 'accordion-button'
    ) {
      btnAcordionUrbanos.current.firstChild.className =
        'accordion-button collapsed'
      panelUrbanos.current.className = 'accordion-collapse collapse'
    } else {
      btnAcordionUrbanos.current.firstChild.className = 'accordion-button'
      panelUrbanos.current.className = 'accordion-collapse collapse show'
    }
  }

  return (
    <div className="accordion-item">
      <h2
        className="accordion-header"
        onClick={colapsarUrbanos}
        ref={btnAcordionUrbanos}
      >
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-2 icon icon-tabler icon-tabler-home-2"
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
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <rect x="10" y="12" width="4" height="4" />
          </svg>
          <h4>Datos Urbanos</h4>
        </button>
      </h2>
      <div
        ref={panelUrbanos}
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo"
      >
        <div className="accordion-body animate__animated animate__fadeIn">
          <li className="list-group-item">
            <strong>cloacas:</strong> {dato.cloacas}
          </li>
          <li className="list-group-item">
            <strong>servicio gas:</strong> {dato.gas}
          </li>
          <li className="list-group-item">
            <strong>agua potable:</strong> {dato.agua}
          </li>
          <li className="list-group-item">
            <strong>alumbrado:</strong> {dato.alumbrado}
          </li>
          <li className="list-group-item">
            <strong>accesibilidad:</strong> {dato.accesibilidad}
          </li>
          <li className="list-group-item">
            <strong>comisarias:</strong> {dato.comisarias}
          </li>
          <li className="list-group-item">
            <strong>centro de salud:</strong> {dato.salud}
          </li>
          <li className="list-group-item">
            <strong>inst. deportivas:</strong> {dato.deporte}
          </li>
          <li className="list-group-item">
            <strong>jardin maternal:</strong> {dato.maternal}
          </li>
          <li className="list-group-item">
            <strong>nivel inicial:</strong> {dato.nivel_inicial}
          </li>
          <li className="list-group-item">
            <strong>nivel primario:</strong> {dato.primario}
          </li>
          <li className="list-group-item">
            <strong>nivel secundario:</strong> {dato.secundario}
          </li>
          <li className="list-group-item">
            <strong>nivel terciario:</strong> {dato.terciarios}
          </li>
          <li className="list-group-item">
            <strong>plan urbano:</strong> {dato.planes_urbanos}
          </li>
          
        </div>
      </div>
    </div>
  )
}

export default ItemsUrbanos
