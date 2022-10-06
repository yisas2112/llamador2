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

    return <>  
            <div id="llamador_last_call" className='d-flex flex-column '> 
            <h1>{paciente !== undefined ? paciente.nombre : 'Paciente'}</h1>
            <div className='d-flex llamador_last_call_video_consul '>
                <div className='llamador_last_call_consul_number d-flex flex-column align-items-center justify-content-center'>
                    <div className='llamador_last_call_number d-flex justify-content-center'>{paciente !== undefined ? paciente.consultorio : '1'}</div>
                    <p className='llamador_last_call_consul'> {(paciente !== undefined) ? Object.keys(paciente)[1] : 'Consultorio'}</p>
                </div>
                <Media src={Video} ></Media>
            </div>
            </div> 
            
    </>
}


export default LastPasc