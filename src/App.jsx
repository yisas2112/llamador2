import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Llamador from './componentes/llamador';
import Patron from "./componentes/Patron";



function App() {
  return <>
        <BrowserRouter>    
          <Routes>
            <Route path="/llamador" element={<Llamador/>}/>
            <Route path="/" element={<Patron/>}/>
          </Routes>   
              
      </BrowserRouter>
        
      
  </>
}

export default App;
