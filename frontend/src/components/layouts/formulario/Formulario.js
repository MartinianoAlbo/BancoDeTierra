import React, {useState, useRef, useEffect} from 'react';
import DatosUrbanos from './datos-formulario/DatosUrbanos';
import DatosCatastrales from './datos-formulario/DatosCatastrales';
import DatosAmbientales from './datos-formulario/DatosAmbientales';

function Formulario({state, setState}) {
    
      let [formState, setFormState] = useState(1)
        
      // ref botones
      const btnAnterior = useRef(null)
      const btnSiguiente = useRef(null)
      const btnGuardar = useRef(null)
      const hrCatastrales = useRef(null)
      const hrUrbanos = useRef(null)
      const hrAmbientales = useRef(null)
    
      //ref Divs
      const divCatastrales = useRef(null)
      const divUrbanos = useRef(null)
      const divAmbientales = useRef(null)
    
      useEffect(() => {
        //Catastrales
        if (formState === 1) {
          //Activado
          divCatastrales.current.className += 'show active'
          hrCatastrales.current.className += ' active'
          btnSiguiente.current.classList.remove('invisible')
    
          //No Activado
          divAmbientales.current.classList.remove('show', 'active')
          hrAmbientales.current.classList.remove('active')
          divUrbanos.current.classList.remove('show', 'active')
          hrUrbanos.current.classList.remove('active')
          btnGuardar.current.className += ' invisible'
          btnAnterior.current.className += ' invisible'
        }
    
        // Urbanos
        if (formState === 2) {
          //Activado
          divUrbanos.current.className += ' show active'
          hrUrbanos.current.className += ' active'
          btnSiguiente.current.classList.remove('invisible')
          btnAnterior.current.classList.remove('invisible')
    
          //No Activado
          btnGuardar.current.className += ' invisible'
          divCatastrales.current.classList.remove('show', 'active')
          hrCatastrales.current.classList.remove('active')
          divAmbientales.current.classList.remove('show', 'active')
          hrAmbientales.current.classList.remove('active')
        }
    
        // Ambientales
        if (formState === 3) {
          //Activado
          divAmbientales.current.className += ' show active'
          hrAmbientales.current.className += ' active'
          btnGuardar.current.classList.remove('invisible')
    
          //No Activado
          divUrbanos.current.classList.remove('show', 'active')
          hrUrbanos.current.classList.remove('active')
          btnSiguiente.current.classList.remove('visible')
          btnSiguiente.current.className += ' invisible'
        }
      }, [formState])
    

  return (

    <>

    <ul
      className="nav nav-pills mb-3 d-flex justify-content-evenly mt-4"
      role="tablist"
    >
      {/* Nav Catast */}

      <li
        className="mt-2 nav-item"
        role="presentation"
        title="Datos Catastrales"
        onClick={() => {
          setFormState(1)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-file-certificate"
          width="32"
          height="32"
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
        <p
          className="mt-2 nav-link active"
          ref={hrCatastrales}
          data-bs-toggle="pill"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        />
      </li>
    

      {/* Nav Urbanos */}
      <li
        className="mt-2 nav-item"
        role="presentation"
        title="Datos Urbanos"
        onClick={() => {
          setFormState(2)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-home-2"
          width="32"
          height="32"
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

        <p
          className="mt-2 nav-link active"
          ref={hrUrbanos}
          data-bs-toggle="pill"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        />
      </li>

      {/* Nav Ambient */}

      <li
        className="mt-2 nav-item"
        role="presentation"
        title="Datos Ambientales"
        onClick={() => {
          setFormState(3)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-seeding"
          width="32"
          height="32"
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

        <p
          className="mt-2 nav-link active"
          ref={hrAmbientales}
          data-bs-toggle="pill"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        />
      </li>
    </ul>

    {/* Formulario */}
    <div className="tab-content">
      <div
        className="animate__animated animate__fadeIn tab-pane fade show active"
        ref={divCatastrales}
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <DatosCatastrales state={state} setState={setState} />
      </div>

      <div
        className="animate__animated animate__fadeIn tab-pane fade "
        ref={divUrbanos}
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <DatosUrbanos state={state} setState={setState} />
      </div>

      <div
        className="animate__animated animate__fadeIn tab-pane fade "
        ref={divAmbientales}
        role="tabpanel"
        aria-labelledby="messages-tab"
      >
        <DatosAmbientales state={state} setState={setState} />
      </div>

      {/* Botones Sig , ant y guardar */}
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
            <div className="d-flex justify-content-between">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setFormState(formState - 1)
                }}
                value={-1}
                title="anterior"
                ref={btnAnterior}
                className="btn btn-primary mt-3 w-60 p-3 justify-content-flex-end
                text-uppercase boton-style"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-bar-to-left"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="10" y1="12" x2="20" y2="12" />
                  <line x1="10" y1="12" x2="14" y2="16" />
                  <line x1="10" y1="12" x2="14" y2="8" />
                  <line x1="4" y1="4" x2="4" y2="20" />
                </svg>
              </button>

              <button
                type="submit"
                ref={btnGuardar}
                className="btn btn-success mt-3 w-60 p-3 justify-content-flex-end
            text-uppercase boton-style"
                title="Guardar Registro"
              >
                Guardar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-device-floppy"
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
                  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                  <circle cx="12" cy="14" r="2" />
                  <polyline points="14 4 14 8 8 8 8 4" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault()
                  setFormState(formState + 1)
                }}
                title="siguiente"
                ref={btnSiguiente}
                className="btn btn-primary mt-3 w-60 p-3 justify-content-flex-end
            text-uppercase boton-style"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-bar-to-right"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="14" y1="12" x2="4" y2="12" />
                  <line x1="14" y1="12" x2="10" y2="16" />
                  <line x1="14" y1="12" x2="10" y2="8" />
                  <line x1="20" y1="4" x2="20" y2="20" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  

  );
}

export default Formulario;
