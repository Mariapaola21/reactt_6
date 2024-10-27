import React from "react";
import style from "../styles/Inicio.css"
function Inicio (){
    return(
        <div className="Container">
            <div >
                <h2 className="Letras-h2">Bienvenido a  la pagina de inicio</h2>
                <a href="/Ejercicio1">Volver al home</a>
            </div>
        </div>
    );
}

export default Inicio;