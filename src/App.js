import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import  Inicio from "./components/Inicio"
import Sobre from "./components/Sobre"
import Ejercicio1 from "./components/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2";

 

function App() {
  return(
    <BrowserRouter>
     
      <Routes>
      <Route path="/Ejercicio2" element ={<Ejercicio2/>} />
        <Route path="/Ejercicio1" element ={<Ejercicio1/>} />
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobre" element={<Sobre/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default  App;