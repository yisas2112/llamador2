import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './App.scss';
import Llamador from './componentes/llamador';
import Patron from "./componentes/Patron";
import { DatosContext } from "./Context";


function App() {
  return <>       
        <DatosContext>
          <BrowserRouter>            
            <Routes>
              <Route path="/llamador/:id" element={<Llamador/>}/>
              <Route exac path="/" element={<Patron/>}/>
            </Routes>                 
          </BrowserRouter>
        </DatosContext>                
        
  </>
}

export default App;
