import React from "react";
import { useRef } from "react";
import './index.scss'

const Card = ({paciente, index})=>{
    console.log(paciente)
    const reference = useRef()

    return <> 
                {/* {paciente ? <div ref={reference} key={index} className={`card__container d-flex flex-column align-items-center mb-2`}>
                <h3>{paciente.nombre}</h3>                
                <div className='align-self-start'>{paciente.consultorio}</div>
                </div> : ''} */}
                {
                    
                    paciente.reverse().map((e, key)=>{
                        
                        return <div ref={reference} key={key} className={`card__container d-flex flex-column align-items-center mb-2`}>
                        <h3>{e.nombre}</h3>                
                        <div className='align-self-start'>{e.consultorio}</div>
                        </div>
                    })
                }
            </>
}

export default Card