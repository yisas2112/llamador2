import React, { useState } from "react"


export const AppContext = React.createContext()

export const DatosContext = ({children}) =>{
  const [datos,setDatos] = useState([]) 
     
  return <>
      <AppContext.Provider value={{datos, setDatos}}>
        {children}
      </AppContext.Provider>
  </>
}