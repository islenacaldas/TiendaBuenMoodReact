//import React from "react";


function ProductoCard(props){
    return (
        <div className="contenedor-producto">
            <img src={props.imagen} className="imagen-producto" alt="fotografia"/>
           <div className="texto-producto">
            <p className="producto">{props.titulo}</p>
            <p className="descripcion-producto">{props.descripcion}</p>
            <p className="precio">{props.precio.toLocaleString("es-CO")}</p>
           <button className="boton-carrito">
             🛒 Añadir al carrito
           </button>
           </div>
           </div>
    )
}

export default ProductoCard;