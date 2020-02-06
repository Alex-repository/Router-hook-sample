import React from 'react';
import {Link} from "react-router-dom";

function ProductoLista ({ producto }) {

     const eliminarProducto = id =>(
          console.log("eliminando ",id)
     );
     return (
  <li
    data-categoria={producto.categoria}
    className="list-group-item d-flex justify-content-between align-item-center"
  >
    <p>
      {producto.nombrePlatillo}
      <span className="font-weight-bold"> ${producto.precioPlatillo}</span>
    </p>
    <div className="div">
      <Link className="btn btn-success mr-2" to={`/productos/editar/${producto.id}`} >Editar</Link>
      <button 
          type="button"
          className="btn btn-danger"
          onClick={()=>eliminarProducto(producto.id)}
     >
          Eliminar &times;
     </button>
    </div>
  </li>
     )};

export default ProductoLista;