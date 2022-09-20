import React from "react";
import Select from 'react-select';
import './index.scss'

const select  = document.getElementById('select')

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


const Patron = () =>{

  return <>
        <div id="patron">
          <Select className="select__patron" options={options}/>
          </div>
  
  </>
}


export default Patron