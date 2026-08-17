import React from "react";


function ProductoCard(props){
    return (
        <div className="contenedor-producto">
            <img src={props.imagen} className="imagen-producto" alt="fotografia"/>
           <div className="texto-producto">
            <p className="producto">{props.titulo}</p>
            <p className="descripcion-producto">{props.descripcion}</p>
           </div>
           </div>
    )
}

export default ProductoCard;