import React ,{ useEffect, useState }from "react";
import { useContext } from "react";
import { AppContext } from "../../Context";
import Select from 'react-select';
import Logo from "../Logo";
import './index.scss'
import { useNavigate } from "react-router-dom";
import { GetPatron } from "../../services";


const Patron = () =>{   
  const [values, setValues] = useState([])              
  const navigate = useNavigate()
  const {setDatos} = useContext(AppContext)
  
  
  const handleLinlk = (event) =>{         
    navigate(`/llamador/${event.values}`)
  }


  const getDataApi = async()=>{
    let data = await GetPatron()
    setDatos(data)    

    if(data.data){                              
      data.data.map((e)=>{                     
        setValues((preState)=> [...preState, {values: e.id_patron, label: `${e.id_patron} - Sucursal: ${e.sucursal.sucursal_desc} - Servicio: ${e.servicio.descripcion} - Sector: ${e.sector == '*' ? '<TODOS>' : e.sector}`}])      
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