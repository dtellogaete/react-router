import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import {  BrowserRouter,  Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Contacto from './views/Contacto';
import NotFound from './views/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter basename="/react-router">
        <Routes>
          <Route path="/" element={<Home/>} />      
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="*" element={<NotFound />} />          
        </Routes>      
      </BrowserRouter>    
    </div>   
  );
}

export default App;
