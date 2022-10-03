import React, { useState } from "react"

export const AppContext = React.createContext()

export const DatosContext = ({children}) =>{
  const [datos,setDatos] = useState([])    
  
  const addDatos = (data) =>{                   
    //setDatos(data)       
  } 

  return <>
      <AppContext.Provider value={{datos, addDatos, setDatos}}>
        {children}
      </AppContext.Provider>
  </>
}