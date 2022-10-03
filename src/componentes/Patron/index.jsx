import React ,{ useEffect, useState }from "react";
import Select from 'react-select';
import Logo from "../Logo";
import './index.scss'
import { GetPatron } from "../../services";
import { useContext } from "react";
import { AppContext } from "../../Context";


const Patron = () =>{   
  const [values, setValues] = useState([])          
  const {addDatos} = useContext(AppContext)  
  const {setDatos} = useContext(AppContext)  
  const {datos} = useContext(AppContext)  
  console.log(datos)
  
  const handleLinlk = (event) =>{    
    window.location.href = `/llamador/${event.values}`;    
  }
  
  const getDataApi = async()=>{
    let data = await GetPatron()         

    if(data.data){       
      addDatos(data)
        setDatos(data)      
        data.data.map((e)=>{                  
        setValues((preState)=> [...preState, {values: e.id_patron, label: `${e.id_patron} - Servicio: ${e.servicio.descripcion} - Sector: ${e.sector == '*' ? '<TODOS>' : e.sector}- Sucursal: ${e.sucursal.empresa_desc}`}])
        
      })      
    }        
  }
  
  useEffect(()=>{
    getDataApi()
    
  },[])
  
  return <>        
        <div id="patron">                          
            <Logo/>            
            <Select className="select__patron" options={values} onChange={(chioce) => {handleLinlk(chioce)}} isClearable={false}/>
        </div>
  </>
}


export default Patron