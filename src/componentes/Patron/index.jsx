import React from "react";
import Select from 'react-select';
import Logo from "../Logo";
import './index.scss'
import Data from '../../datos/patron.json'
import { useEffect } from "react";
import { useState } from "react";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'strawberry', label: 'Strawberry' }
]


const Patron = () =>{
  const [patron, setPatron] = useState(Data)
  const [values, setValues] = useState([])
  
  useEffect(()=>{    
    patron.map((patrones)=>{
      console.log(patrones)
      console.log(values)
      //setValues(...values, {values: patrones.id_sector, label: `Patron ${patrones.id_patron} - ${patrones.patron}`})
      setValues((preState)=> [...preState, {values: patrones.id_sector, label: `Patron ${patrones.id_patron} - ${patrones.patron}`}])
        
       
    })
    console.log(values)
  },[])
  return <>
        <div id="patron">          
            <Logo/>
            <Select className="select__patron" options={values}/>          
          </div>
  
  </>
}


export default Patron