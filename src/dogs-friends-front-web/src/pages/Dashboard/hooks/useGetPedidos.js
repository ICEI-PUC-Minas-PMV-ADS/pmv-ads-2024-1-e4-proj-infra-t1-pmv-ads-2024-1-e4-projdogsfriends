import { useEffect, useState } from "react"
import { api } from "../../../api/axios"

export const useGetPedidos = (userId) => {
  
    const[pedidos, setPedidos] = useState([])

    useEffect(() => {
      (
        async() => {
          const res = await api.get(`pedido/cliente/${userId}`)
          const {data} = res
          console.log(res)
          setPedidos(data)
        }
      )()  
    },[userId])


  return {
    pedidos
  }
}
