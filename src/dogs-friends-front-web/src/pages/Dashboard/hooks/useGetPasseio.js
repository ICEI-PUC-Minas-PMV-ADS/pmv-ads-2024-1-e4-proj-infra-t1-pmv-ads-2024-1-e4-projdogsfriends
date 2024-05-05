import { useState, useEffect, useLayoutEffect } from "react"
import { api } from "../../../api/axios"

export const useGetPasseio = (passeioId) => {

    const[passeio, setPasseio] = useState(null)
    
    useLayoutEffect(() => {
      (
        async() => {        
          const res = await api.get(`passeio/${passeioId}`)
          const {data} = res
      
          setPasseio(data)

        }
      )()  
    },[passeioId])


  return {
    passeio
  }
}
