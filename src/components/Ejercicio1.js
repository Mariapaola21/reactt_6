import React from "react";
import style from "../styles/Ejercicio1.css"
import { Link } from "react-router-dom";

function Ejercicio1 (){
 return(

<div>

    <div>
        <nav className="menu-nav">
            <Link to="/Ejercicio1" className="linkss">Ejercicio 1</Link>
            <Link to="/Ejercicio2" className="linkss">Ejercicio 2</Link>
    
        </nav>
    </div>

    <div className="Container-E1">
        <div className="subcontainer">

       
        <h1>Ejercicio numero 1 </h1>
        <p>Dale click para observar lo que desees</p>
   
    <nav className="lines">  
    <Link to="/" className="bton">Inicio</Link>
     <Link to="/sobre" className="bton">Sobre</Link>
    </nav>
    </div>
    </div>
    </div>
 );
}
 export default Ejercicio1;