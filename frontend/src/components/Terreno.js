import React from 'react'
import Items from './Items'
import Header from './layouts/header/Header'

const Terreno = ({ terreno }) => {

  return (
    <>
      <div className="row">
        <Header where={'listaItems'} />
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <ol className="mt-4">
              <Items key={crypto.randomUUID()} info={terreno} />
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default Terreno
