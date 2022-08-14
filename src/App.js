import './App.css';
import {Routes, Route} from 'react-router-dom'
import Cabezera from './components/Cabezera.js';
import Servicios from './components/Servicios.js';
import Registro from './components/Registro.js';
import Ingresar from './components/Ingresar.js';
import Nosotros from './components/Nosotros';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Cabezera /> 
      } />
        <Route path='/Nosotros' element= {<Nosotros /> } />
        <Route path='/Servicios' element= {<Servicios /> } />
        <Route path='/Registro' element= {<Registro /> } />
        <Route path='/Ingresar' element= {<Ingresar /> } />
      </Routes>
    </div>
  );
}
