import axios from 'axios';

export const GetPatron = async()=>{   
  const baseURL = 'http://10.1.0.11:8000/api/atributo/llamadorWeb'  
  const {data} = await  axios.get(baseURL)     
  
  return data
  
}





