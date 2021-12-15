import React from 'react';
import 'animate.css';

export default function Items({ info }) {
  console.log(info);
  return (
    <div className="container col-md-6 text-uppercase">
      <div className="card shadow animate__animated animate__fadeIn mt-3">
        <div className="card-header py-3">
          <strong>Informacion del Terreno</strong>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Matricula: {info[2]}</li>
          <li className="list-group-item">Propietario: {info.propietario}</li>
          <li className="list-group-item">Telefono: {info.telefono}</li>
        </ul>
      </div>
    </div>
  )
}
