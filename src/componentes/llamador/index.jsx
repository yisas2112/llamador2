import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../Context';
import Pusher from 'pusher-js';
import Logo from '../../images/logo.png'
import './index.scss'
import Card from '../Card';
import LastPasc from '../LastPac';
import { GetSocket } from '../../services';


const Llamador = ()=>{        
    const [paciente, setpaciente] = useState()    
    const [cluster, setCluster] = useState()
    const [clave, setClave] = useState()
    const id_patron = useParams()
    const {datos} = useContext(AppContext)  
    const navigate = useNavigate()
    
    const getDataSocket = async() =>{
        GetSocket()
        .then(res => {                            
            setCluster(res.data.cluster)
            setClave(res.data.key)
            setPusher(cluster,clave)
        }) 

    }

    useEffect(()=>{          
        getDataSocket()     
      
    },[getDataSocket])    

    const setPusher = async (cluster, clave)=>{        
        let callback = (eventName, dato) => {                         
            datos.data !== undefined ?                
                datos.data.map((patron)=>{                
                    if(patron.id_patron == id_patron.id){
                        patron.sector.map((sector) =>{  
                            if(dato !== undefined){
                                if(dato.message[0].servicio_origen.id_sector === sector){
                                    setpaciente({
                                        nombre : `${dato.message[0].comprobante.paciente.apellido_nombre}`,
                                        consultorio: `${dato.message[0].consultorio}`
                                    })      
                                }            
                            }                                              
                        })
                    }
                }) 
        : navigate(`/`)
            
            };            
            const pusher = new Pusher(`${clave}`,{                
                cluster: cluster,        
                wsHost: '10.1.0.11',
                wsPort: 6001,
                disableStats: true,
                forceTLS: false
            })        
            
            const channel =  pusher.subscribe("channel-llamador")                                               
            channel.bind_global(callback)
            
            return (()=>{
                channel.unsubscribe('channel-llamador')        
            })

    }
    
    return <>                            
            <div id='llamador'>     
                <div className='container-fluid d-flex llamador__container'>
                    <div className='llamador_logo_titulo__last__pac'>
                        <div className='d-flex llamador_logo_titulo align-items-center'>
                            <img  alt='Logo Sucursal' src={Logo} ></img>
                            
                        </div>
                        <LastPasc dato={paciente}/>
                    </div>                    
                    <div className='llamador_list_last_call'>                        
                        <div className='llamador_list_last_call__titulo d-flex justify-content-center align-items-center'>
                            <h2>Últimos LLamados</h2>
                        </div>                        
                        <Card paciente={paciente} ></Card>
                    </div>
                </div>           
            </div>
            </>
        
}



export default Llamador