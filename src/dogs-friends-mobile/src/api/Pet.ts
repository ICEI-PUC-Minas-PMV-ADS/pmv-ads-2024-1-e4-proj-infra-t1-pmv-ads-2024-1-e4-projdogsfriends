import { api } from "./axios/axios"
import { IPet } from "./interface/Pet"


export class Pet {
    async getPet(petId: string): Promise<IPet>{
        try {
          const {data} = await api.get(`pet/${petId}`)
          return data
        } catch (error) {
            console.log("error ===>" , error)
            throw error
        }
    }
}