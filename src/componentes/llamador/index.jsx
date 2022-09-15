import React, {useEffect, useState} from 'react'
import Pusher from 'pusher-js';
import Logo from '../../images/logo.png'
import './index.scss'
import Media from '../video'
import Video from '../../images/video.mp4'
import Datos from '../../datos/datos.json'
import Card from '../Card';
import axios from 'axios';
import LastPasc from '../LastPac';

const Llamador = ()=>{        
    const [paciente, setpaciente] = useState()
    const [listaPaciente, setListaPaciente] = useState([])
    const [cluster, setCluster] = useState()
    const [clave, setClave] = useState()
    
    
    useEffect(()=>{       
        axios.get(`http://10.1.0.11:8000/api/atencionPaciente/websocket`)
      .then(res => {                
        setCluster(res.data.cluster)
        setClave(res.data.key)
        setPusher(cluster,clave)
      })         
            
    },[cluster,clave])

    const setPusher = async (cluster, clave)=>{
        let callback = (eventName, dato) => {               
            if(dato){                
                setpaciente(dato.message)                   
                console.log(dato.message)                   
                //setListaPaciente((listaPaciente) => [...listaPaciente, pac])
                //addListPac(pac)
                
            }
            
                
            };            
            const pusher = new Pusher(`${clave}`,{                
                cluster: cluster,        
                wsHost: '10.1.0.11',
                wsPort: 6001,
                disableStats: true,
                forceTLS: false
            })        
            
            const channel =  pusher.subscribe("channel-llamador")                       
            pusher.allChannels().forEach(channel => console.log(channel));
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
                        <Card paciente={paciente ? paciente : ''}></Card>
                    </div>
                </div>           
            </div>
            </>
        
}



// import React, {useEffect, useState} from 'react'
// import Logo from '../../images/logo.png'
// import './index.scss'
// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';

// export const Llamador = ()=>{    
//     // const [paciente, setpaciente] = useState({
//     //     nombre: '',
//     //     apellido: '',
//     //     consultorio: ''
//     // })
//     // const [listaPaciente, setListaPaciente] = useState([])
    
    
//     useEffect(()=>{        
        
//         window.Pusher = Pusher;
 
//         let prueba = window.Echo = new Echo({
//         broadcaster: 'pusher',
//         key: 'ABCD',
//         cluster: 'mt1',        
//         wsHost: '10.1.0.11',
//         wsPort: 6001,
//         disableStats: true,
//         forceTLS: false
//         });
        
//         console.log(prueba)
        

//         let channel = prueba.channel('channel-llamador')
//         console.log(channel)
//         channel.listen('LlamadorEvent', (e)=>{
//             console.log(e)
//         })
        
        
//     },[])

    
    
//     return <>
//             <div id='llamador' className='container-fluid'>     
//                 <div className='d-flex'>
//                     <div>
//                         <div className='mt-2 d-flex' id='logo-nombre'>
//                             <img src={Logo} ></img>
//                             <h1>Establecimiento</h1>
//                         </div>
//                         <div className='d-flex flex-column'>                             
//                             <h2>Martinez Gutierrez José Alberto</h2>
//                             <div>Box-2</div>
//                             <div>ACÁ VA VIDEO</div>
//                         </div>
//                     </div>
//                     <div className='d-flex flex-column'>
//                         <h2>últimosLLamados</h2>
//                         <div>
//                             <h3>Martinez Gutierrez José Alberto</h3>
//                             <div>Box-2</div>
//                         </div>
                            
                            
//                     </div>
//                 </div>           
//             </div>

//             </>
        
// }

export default Llamador