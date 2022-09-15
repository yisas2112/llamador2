import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import './index.scss'

const Card = ({paciente})=>{
    const [arrayPac, setArrayPac] = useState([])

    
    useEffect(()=>{
        if(arrayPac.length > 4){
    arrayPac.pop()
        }
        
        paciente === '' ? arrayPac.pop() : setArrayPac((arrayPac) => [...arrayPac, paciente])        
    },[paciente])
    
    return <>               
                {
                    arrayPac.reverse().map((e, key)=>{                               
                        return <div key={key} className={( key === 0 ? `card__container d-flex flex-column align-items-center mb-2` : `llamador_list_last_call__card d-flex flex-column align-items-center mb-2`)} >
                        <h3>{e.nombre} {e.apellido}</h3>                
                        <div className='card__consultorio align-self-start ml-2'>{e.consultorio}</div>
                        </div>
                    }) 
                }
            </>
}

export default Card