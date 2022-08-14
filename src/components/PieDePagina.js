import React from "react";
import '../style/PieDePagina.css';
import { FaMapMarkerAlt} from 'react-icons/fa';
import { AiFillPhone } from "react-icons/ai";

export default function PieDePagina(){
  return (
    <>
    <div className="container_pie_de_pagina">
      <div className="contacto">
        <h3>CONTACTANOS</h3>
        <ul>
          <li>MaxColombia</li>
          <li>Fernanda Pedraza</li>
          <li>123456789</li>
          <li>MaxColombia@hotmail.com</li>
        </ul>
      </div>
      <div className="direccion">
        <h4>OFICINAS CORPORATIVAS</h4>
        <div className="direccion_logo">
          <FaMapMarkerAlt className="icono_pie_de_pagina"/>
          <AiFillPhone className="icono_pie_de_pagina"/>
        </div>
        <div className="informacion">
          <ul>
            <li>Cll 67B #57 B - 28</li>
            <li>Bogotá, Colombia</li>
            <li>+57 123456789</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}