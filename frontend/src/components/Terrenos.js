// import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

// const Terrenos = ({ terrenos }) => {
//   if (terrenos.length === 0) return null;
//   return (
//     <Fragment>
//       <h1 className="my-5">Administrador de Terrenos</h1>

//       <div className="container mt-5 py-5">
//         <div className="row">
//           <div className="col-12 mb-5 d-flex justify-content-center">
//             <Link
//               to={"/nuevo-terreno"}
//               className="btn btn-success text-uppercase
//                    py-2 px-5 font-weight-bold"
//             >
//               Agregar Terreno
//             </Link>
//           </div>
//           <div className="col-md-8 mx-auto">
//             <div className="list-group">
//               {terrenos.map((terreno) => (
//                 <a
//                   key={terrenos._id}
//                   className="p-5 list-group-item
//                          list-group-item-action flex-column align-items-start"
//                 >
//                   <div className="d-flex w-100 justify-content-between mb-4">
//                     <h3 className="mb-3">Padron {terreno.padron}</h3>

//                     <small className="fecha-alta">
//                       Matricula {terreno.matricula}
//                     </small>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Terrenos;
