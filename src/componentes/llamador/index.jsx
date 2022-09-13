import React, {useEffect, useState} from 'react'
import Pusher from 'pusher-js';
import Logo from '../../images/logo.png'
import './index.scss'
import Media from '../video'
import Video from '../../images/video.mp4'
import Datos from '../../datos/datos.json'
import Card from '../Card';

const Llamador = ()=>{        
    const [paciente, setpaciente] = useState()
    const [listaPaciente, setListaPaciente] = useState([])
    
    
    // useEffect(()=>{        
    //     let callback = (eventName, dato) => {   
    //         console.log(dato)
    //         console.log(paciente.nombre )
    //         if((Object.keys(dato).length > 0) && paciente.nombre !== ''){    
                              
    //             setpaciente(paciente.nombre = dato.message.nombre,
    //                 paciente.apellido = dato.message.apellido,
    //                 paciente.consultorio = dato.message.consultorio)                
    //             setListaPaciente(listaPaciente.push(paciente))            
                
    //         }
            
    //         console.log(paciente)
    //         console.log(listaPaciente)
    //       };
    //     const pusher = new Pusher('fd221ab961e9ba848ace',{
    //         cluster: 'us2'
    //     })        
    //     console.log(pusher)
        
        
    //     const prueba = pusher.subscribe('channel-llamador')                
    //     console.log(prueba)
    //     prueba.bind_global(callback)
        
    //     return (()=>{
    //         prueba.unsubscribe('channel-llamador')        
    //     })
    // },[])

    const randomElement = ()=>{
        const keys = Object.keys(Datos)

        return Datos[keys[keys.length * Math.random() << 0]]
    }

    const addListPac = (nuevoPaciente) => {  
        console.log(nuevoPaciente)                                            
        setListaPaciente((listaPaciente) => [...listaPaciente, nuevoPaciente])
        //setListaPaciente(listaPaciente.push(nuevoPaciente))        
        console.log(listaPaciente)                                    
    }
   
    useEffect(()=>{
        console.log(typeof(listaPaciente))
        if(paciente === undefined){
            let pac = randomElement(Datos)                         
            console.log(pac)
            setpaciente(pac)   
            setListaPaciente((listaPaciente) => [...listaPaciente, pac])
        }        

        setInterval(() => {            
            if(paciente !== undefined){              
                let pac = randomElement(Datos)                                                                         
                addListPac(pac)
                
            }
          }, 10000);

    },[paciente])

    
    
    return <>
            <div id='llamador'>     
                <div className='container-fluid d-flex llamador__container'>
                    <div className='llamador_logo_titulo__last__pac'>
                        <div className='d-flex llamador_logo_titulo align-items-center'>
                            <img src={Logo} ></img>
                            
                        </div>
                        <div className='llamador_last_call d-flex flex-column '> 
                            <h1>Jesús Rodriguez</h1>
                            <div className='d-flex justify-content-around llamador_last_call_video_consul '>
                                <div className='llamador_last_call_consul_number d-flex flex-column align-items-center '>
                                    <div className='llamador_last_call_number d-flex align-items-center justify-content-center'>2</div>
                                    <p className='llamador_last_call_consul'>Box</p>
                                </div>
                                <Media src={Video} ></Media>
                            </div>
                        </div>
                    </div>                    
                    <div className='llamador_list_last_call'>                        
                        <div className='llamador_list_last_call__titulo d-flex justify-content-center align-items-center'>
                            <h2>Últimos LLamados</h2>
                        </div>
                        {listaPaciente.reverse().map((e, key)=>{
                            console.log(key)
                            return <Card paciente={e} key={key}></Card>
                        })}
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
//         key: 'lsPNeJoZkZXLrNWDcA',
//         cluster: 'us2',
//         forceTLS: true
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