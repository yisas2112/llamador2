import React from "react";
import { useEffect, useState } from "react";
import './index.scss'

const Card = ({paciente})=>{
    const [arrayPac, setArrayPac] = useState([])
    const [array, setArray] = useState()

    useEffect(()=>{
        if(paciente !== undefined){        
            setArrayPac((arrayPac) => [paciente, ...arrayPac]) 
        }
    },[paciente])
    
    return <>               
                {
                    
                    arrayPac.map((e, key)=>{                          
                        return <div key={key} className={( key === 0 ? `card__container d-flex flex-column align-items-center mb-2` : `llamador_list_last_call__card d-flex flex-column align-items-center mb-2`)} >
                        <h3>{e.nombre} {e.apellido} {key}</h3>                
                        <div className='card__consultorio align-self-start ml-2'>Consultorio {e.consultorio}</div>
                        </div>
                    }) 
                }
            </>
}

export default Card