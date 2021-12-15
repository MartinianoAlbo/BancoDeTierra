import React from 'react'
import { Link } from 'react-router-dom'
import useClienteAxios from '../hook/useClieteAxios'
import Items from './Items'

const TerrenoEncontrado = ({ numeroPadron }) => {
  const { data } = useClienteAxios(numeroPadron, 'get')

  const padron = data.map((terreno) => {
    return terreno.padron
  })

  return (
    <>
      <div className="col-12 mb-5 d-flex justify-content-center mt-5">
        <Link
          to={'/'}
          className="btn btn-success text-uppercase
               py-2 px-5 font-weight-bold"
        >
          Volver
        </Link>
      </div>

      <h3 className="text-center">
        Padron 
        <span className="mx-2 text-indigo">{padron}</span>
      </h3>
      <ol>
        {data.map((info) => (
          <Items key={info._id} info={Object.values(info).filter(dato => dato.length > 0)} />
        ))}
      </ol>
    </>
  )
}

export default TerrenoEncontrado
