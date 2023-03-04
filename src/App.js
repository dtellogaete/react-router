import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import {  BrowserRouter,  Route, Routes, HashRouter } from 'react-router-dom';

import Home from './views/Home';
import Contacto from './views/Contacto';
import NotFound from './views/NotFound';

function App() {
  return (
    <div>
      <HashRouter >
        <Routes>
          <Route path="/" element={<Home/>} />      
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="*" element={<NotFound />} />          
        </Routes>      
      </HashRouter>    
    </div>   
  );
}

export default App;
