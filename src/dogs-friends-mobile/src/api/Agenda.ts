import { api } from "./axios/axios"

export class Agenda {
   static async getAgenda(passeadorId: string){
        try {
            const { data } = await api.get(`/agenda-passeador/agenda/${passeadorId}`)
            return data;
        } catch (error) {
            console.log("error ===>", error)
            throw error
        }
    }

    static async addAgenda(data: any){
        try {
          const res = await api.post('/agenda-passeador', data)
          console.log(res)
          return res
        } catch (error) {
            console.log("error ===>", error)
            throw error
        }
    }
}