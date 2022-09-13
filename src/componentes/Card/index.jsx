import React from "react";
import { useRef } from "react";
import './index.scss'

const Card = ({paciente, key})=>{
    console.log(key)
    const reference = useRef()

    return <> 
                {paciente ? <div ref={reference} className={`card__container d-flex flex-column align-items-center mb-2`}>
                <h3>{paciente.nombre}</h3>                
                <div className='align-self-start'>{paciente.consultorio}</div>
                </div> : ''}
            </>
}

export default Card