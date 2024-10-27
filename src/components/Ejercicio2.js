import React, {useState, useEffect} from "react";  //se importa el react con los useState y UseEffect
import style from "../styles/Ejercicio2.css"

function Ejercicio2 (){  //funcion que me va acubrir el codigo

    const [Contador, setContador] = useState (0);  //creamos el contador y se setea, se debe inicializar  desde 0
  
    useEffect (()=>{ //se utiliza para crear el efecto
        console.log("El contador esta siendo modificado") //muestra en mi consola
    }, [Contador]); //solo se ejecutara cuando el Contador cambie

    const Incremento = () => {  //se crea una constante que incrementa el boton
        setContador (Contador + 1); //sumara de 1 en 1 el contador
    };
    
    return( //retorna en tu pantalla, debes llamar las constantes a las etiquetas 
        <div className="Container">
            <div >
            <h1>
             Contador: {Contador}            
            </h1>
            <button onClick={Incremento}> Aumenta tu contador </button>

            <a href="Ejercicio1"> Volver al home</a>
            </div>
        </div>
    );

}

export default Ejercicio2;