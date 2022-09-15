import React from "react";
import Media from "../video";
import Video from '../../images/video.mp4'
import { useState } from "react";
import { useEffect } from "react";
import './index.scss'


const LastPasc = ({dato})=>{        
    const [paciente, setPaciente] = useState()    

    useEffect(()=>{        
        setPaciente(dato)
    },[dato])

    const getConsulNumber = (consul, param) =>{        
        let thenConsul = consul.replace(/[0-9]/g, '');        
        let thenum = consul.replace( /^\D+/g, '')
        
    return param === 'num' ? thenum : thenConsul

    }

    return <>  
            <div id="llamador_last_call" className='d-flex flex-column '> 
            <h1>{paciente !== undefined ? paciente.nombre  + paciente.apellido: 'Paciente'}</h1>
            <div className='d-flex justify-content-around llamador_last_call_video_consul '>
                <div className='llamador_last_call_consul_number d-flex flex-column align-items-center '>
                    <div className='llamador_last_call_number d-flex align-items-center justify-content-center'>{paciente !== undefined ? getConsulNumber(paciente.consultorio, 'num') : '1'}</div>
                    <p className='llamador_last_call_consul'> {paciente !== undefined ? getConsulNumber(paciente.consultorio, 'Consul') : 'Consultorio'}</p>
                </div>
                <Media src={Video} ></Media>
            </div>
            </div> 
            
    </>
}


export default LastPasc