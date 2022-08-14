import React from 'react';
import '../style/Cuerpo1.css'
import {Link} from 'react-router-dom';
const rutaImagen = require('../image/asesoria.png');
const rutaImagen2 = require('../image/moneda.png');
const rutaImagen3 = require('../image/apartamento.png');
function Cuerpo1(){
    return (
      <div className='container_cuerpo1'>
        <div className='container_texto'>
          <div className='empresa'>
            <h2 className='titulo'>Nuestra Compañía</h2>
            <p>Somos una empresa que ofrece soluciones a las 
              personas naturales y jurídicas, contando con 
              talento humano competente, el cual genera 
              estrategias efectivas las cuales conllevan al 
              cabal cumplimiento de las expectativas de nuestros 
              clientes, comprometidos con el mejoramiento continuo 
              de nuestros procesos, para convertirnos en la mejor 
              opción de nuestros clientes.</p>
          </div>
          <div className='servicios'>
            <h2 className='titulo'>Nuestros Servicios</h2>
            <div className='numero_servicios'>
              <Link to='/Registro' className='boton_1'>
                <div className='servicio_boton_1'>
                  <img className='cuerpo1_img' src={rutaImagen} alt='icono_correcto' /> 
                </div>
                <p className='texto_servicio'>Asesoría</p>
              </Link>
              <Link to='/Registro' className='boton_1'>
                <div className='servicio_boton_1'>
                  <img className='cuerpo1_img' src={rutaImagen2} alt='icono_correcto' /> 
                </div>
                <p className='texto_servicio'>Tecnología</p>
              </Link>
              <Link to='/Registro' className='boton_1'>
                <div className='servicio_boton_1'>
                  <img className='cuerpo1_img' src={rutaImagen3} alt='icono_correcto' /> 
                </div>
                <p className='texto_servicio'>Financiera</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    );
}

export default Cuerpo1;