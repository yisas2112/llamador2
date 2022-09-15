import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Llamador from './componentes/llamador';



function App() {
  return <>
        <BrowserRouter>       
        <Routes>          
          <Route exact path='/' element={ <Llamador/>}/>
        </Routes>       
      </BrowserRouter>
        
      
  </>
}

export default App;
