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

   async findClientePasseador(passeadorId: string, token:string){
    try{
        const {data} = await api.get(`cliente/passeador/${passeadorId}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return data
    }catch(error){
        console.log("error ===>" , error)
        throw error
    }
   }

   async search(termo: string, uf: string, limit=10, offset=0, token){
    const url = `cliente/search?term=${termo}&estado=${uf}`
    try {
        const {data} = await api.get(url,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return data
    } catch (error) {
        console.log("error ===>" , error)
        throw error
    }
   }
}
