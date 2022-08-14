import React from 'react';
import {Link} from 'react-router-dom';
import '../style/Cabezera.css'
import Cuerpo1 from './Cuerpo1';
import Carousel_1 from "./carousel_1.js";
import Nosotros from "./Nosotros.js";
import PieDePagina from './PieDePagina.js';
const img1 = require('../image/carousel_1.jpeg');
const img2 = require('../image/carousel_2.webp');
const img3 = require('../image/carousel_3.jpeg');
const imagenLogo = require('../image/logoMaxColombia.png');
const images = [
  {
    id:'1',
    title: 'economia financiera',
    image: img1,
    texto: 'Grupo MaxColombia',
  },
  {
    id:'2',
    title: 'economia financiera',
    image: img2,
    texto: 'Grupo MaxColombia',
  },
  {
    id:'3',
    title: 'economia financiera',
    image: img3,
    texto: 'Grupo MaxColombia',
  },
];

export default function Cabezera(){
    return (
        <>
        <div className='container_cabezar'>
            <img className='logo'
              src= {imagenLogo}
              alt='logo_empresa'/>
          <div className='cabezera_texto'>
            <Link to='/' className='texto' >Inicio</Link>
            <a href='#Servicios1' className='texto'>Servicios</a>
            <a href='#Nosotros1' className='texto'>Nosotros</a>
            <a href='#pie_de_pagina_1' className='texto'>Contacto</a>
          </div>
        </div>
        <Carousel_1  images = {images}/> 
        <div id='Servicios1' className='cuerpo_1'>
          <Cuerpo1 />
        </div>
        <div className='Nostros_1' id='Nosotros1'>
          <Nosotros />
        </div>
        <div className='pie_de_pagina1' id='pie_de_pagina_1'>
          <PieDePagina />
        </div>
        </>
    );
}
