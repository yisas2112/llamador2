import React, {useEffect, useState} from 'react'
//import Pusher from 'pusher-js';
import Logo from '../../images/logo.png'
import './index.scss'

const Llamador = ()=>{    
    // const [paciente, setpaciente] = useState({
    //     nombre: '',
    //     apellido: '',
    //     consultorio: ''
    // })
    // const [listaPaciente, setListaPaciente] = useState([])
    
    
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

    
    
    return <>
            <div id='llamador'>     
                <div className='container-fluid d-flex'>
                    <div className='llamador_logo_titulo__last__pac'>
                        <div className='d-flex llamador_logo_titulo align-items-center'>
                            <img src={Logo} ></img>
                            <span className='llamador_establecimiento'>Establecimiento</span>
                        </div>
                        <div>
                            <h2>Martinez Gutierrez José Alberto</h2>
                            <div className='d-flex'>
                                <div>Box-2</div>
                                <div>ACÁ VA VIDEO</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>últimosLLamados</h2>
                        <div>
                            <h3>Martinez Gutierrez José Alberto</h3>
                            <div>Box-2</div>
                        </div>
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