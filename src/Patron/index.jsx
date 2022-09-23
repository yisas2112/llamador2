import React from "react";
import Select from 'react-select';
import Logo from "../Logo";
import './index.scss'
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {GetPatron} from '../conexiones/index'



const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'strawberry', label: 'Strawberry' }
]

const Patron = () =>{ 
  const [values, setValues] = useState([])
  
  useEffect(()=>{    
    GetPatron().then(data =>{                  
      data.data.map((e)=>{
        console.log(e)
        let ape_nom = ''
        let consul = ''        
        console.log(e.sector)
        e.patron.map(e=>{
          
          if(e.includes("ape")){
            ape_nom = 'Apellido Nombre'
          }else if (e.includes("consult")){
            consul = 'Consultorio'
          }else{
            
          }
        })
        setValues((preState)=> [...preState, {values: e.id_sector, label: `${e.id_patron} - Servicio: ${e.servicio.descripcion} - Sector: ${e.sector == '*' ? '<TODOS>' : e.sector}- Sucursal: ${e.sucursal.empresa_desc} .${ape_nom}  - ${consul}`}])
      })
      
    })
    
  },[])
  
  return <>                 
        <div id="patron">                  
            <Logo/>            
            <Select className="select__patron" options={values}
            isSearchable={false}
            
            />
        </div>
  
  </>
}


export default Patron