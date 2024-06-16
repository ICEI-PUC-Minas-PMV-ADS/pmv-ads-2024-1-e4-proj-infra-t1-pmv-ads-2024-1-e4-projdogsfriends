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

   async getPedidos(userId:string){
    try{
      const {data} = await  api.get(`pedido/cliente/${userId}`)
      return data
    }catch(error){
        console.log("error ===>" , error)
        throw error
    }
   }

   async getPedido(pedidoId: string){
    try{
        const {data} = await api.get(`pedido/${pedidoId}`)
        return data
    }catch(error){
        console.log("error ===>" , error)
        throw error
    }
   }

   async updatePhoto(foto: string, id: string, token:string){
    try {
    const data = await api.patch("cliente/updatePhoto",{id: id, fotoPerfil: foto},
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
     )
      
     return data
    } catch (error) {
        console.log("error ===>" , error)
        throw error
    }
   }


   async createPedido(
    precoTotal: number, 
    agendaPasseadorId: string,
    clienteId: string,
    passeadorId:string,
    pets: string[]){
    try {
     const res = await api.post("/pedido", {
            precoTotal,
            agendaPasseadorId,
            clienteId,
            passeadorId,
            pets
        },
    {
        headers:{
            "Content-Type": "application/json"
        }
    })
      
     return res
    } catch (error) {
        console.log("error ===>" , error)
        throw error
    }
   }
}

//https://images.unsplash.com/photo-1532469060546-4eb37b460481?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

//https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

//https://images.unsplash.com/photo-1587143185708-674ef4a1c09b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D