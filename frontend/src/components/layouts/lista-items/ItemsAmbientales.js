import React, { useRef } from 'react'
import 'animate.css'

function ItemsAmbientales({ dato }) {
  const btnAcordionAmbientales = useRef(null)
  const panelAmbientales = useRef(null)

  const colapsarAmbientales = (e) => {
    e.preventDefault()

    if (
      btnAcordionAmbientales.current.firstChild.className === 'accordion-button'
    ) {
      btnAcordionAmbientales.current.firstChild.className =
        'accordion-button collapsed'
      panelAmbientales.current.className = 'accordion-collapse collapse'
    } else {
      btnAcordionAmbientales.current.firstChild.className = 'accordion-button'
      panelAmbientales.current.className = 'accordion-collapse collapse show'
    }
  }

  return (
    <div className="accordion-item">
      <h2
        className="accordion-header"
        onClick={colapsarAmbientales}
        ref={btnAcordionAmbientales}
      >
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseThree"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseThree"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-2 icon icon-tabler icon-tabler-seeding"
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
            <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
            <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
            <line x1="12" y1="20" x2="12" y2="10" />
          </svg>
          <h4>Datos Ambientales</h4>
        </button>
      </h2>

      <div
        ref={panelAmbientales}
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingThree"
      >
        <div className="accordion-body animate__animated animate__fadeIn">
          <li className="list-group-item">
            <strong>industrias:</strong> {dato.industrias}
          </li>
          
          <li className="list-group-item">
            <strong>pasivos urbanos:</strong> {dato.pasivo_urbano}
          </li>
          <li className="list-group-item">
            <strong>contaminantes:</strong> {dato.contaminantes}
          </li>
          <li className="list-group-item d-block" value={dato.observaciones}>
            <strong>observaciones:</strong>
            <p className=''>{dato.observaciones}</p>  
          </li>
        </div>
      </div>
    </div>
  )
}

export default ItemsAmbientales
