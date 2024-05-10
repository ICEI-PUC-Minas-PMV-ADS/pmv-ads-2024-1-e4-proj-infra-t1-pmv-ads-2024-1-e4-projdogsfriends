import { api } from "./axios/axios"

export class Cliente {
   async getCliente(token: string){
    try{
       const {data} = await api.get('cliente/me', {
            headers:{
                Authorization: `Bearer ${token}`
            },
        
        })              
      return data
    }catch(error){
        console.log("error ===>" , error)
        throw error
    }
   } 
}