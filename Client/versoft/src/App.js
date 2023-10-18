import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './Vistas/Inicio/Inicio';
import Nosotros from './Vistas/Nosotros/Nosotros';
import Principal from './Vistas/Principal/Principal';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element= {<Inicio />}/>
      <Route path='/principal' element= {<Principal />}/>
      <Route path='/nosotros' element= {<Nosotros />}/>
     </Routes>
    </div>
  );
}

export default App;
