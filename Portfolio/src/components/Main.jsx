import React from "react";
import "../css/Main.css";


const Main = ({ nombre, apellido, edad, direccion, Tel, estadoCivil, hobby }) => {
  return (
    <div className="main" >
      <div className="tarjeta1">
<div className="tarjeta1__content">
  
      <h3>
        {nombre} {apellido}
      </h3>
      <p>Mi Edad: {edad}</p>
      <p>Vivo en: {direccion}</p>
      <p>Mi Telefono: {Tel}</p>
      <p>Estado civil: {estadoCivil}</p>
      <p>Hobby: {hobby}</p>
</div> 
</div>

      <div className="targeta">
      
      </div>
    </div>
  );
};

export default Main;
