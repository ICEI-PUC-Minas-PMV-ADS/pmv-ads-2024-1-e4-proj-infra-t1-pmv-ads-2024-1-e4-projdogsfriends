import { useEffect, useState } from "react"
import { api } from "../../../api/axios"

export const useGetPets = (userId) => {
  
    const[pets, setPets] = useState([])
    let dataPet = []

    useEffect(() => {
      (
        async() => {
          const res = await api.get(`pet/cliente/${userId}`)
          dataPet = res.data
    
          setPets(dataPet)
        }
      )()  
    },[userId])


  return {
    pets
  }
}
