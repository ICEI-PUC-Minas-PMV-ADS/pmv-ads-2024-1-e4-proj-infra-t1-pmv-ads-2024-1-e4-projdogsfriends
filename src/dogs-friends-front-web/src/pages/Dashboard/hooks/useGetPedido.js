import { useState, useEffect, useLayoutEffect } from "react"
import { api } from "../../../api/axios"

export const useGetPedido = (pedidoId) => {

    const[pedido, setPedido] = useState(null)
    
    useLayoutEffect(() => {
      (
        async() => {        
          const res = await api.get(`pedido/${pedidoId}`)
          const {data} = res
        
          console.log(data)
          setPedido(data)

        }
      )()  
    },[pedidoId])


  return {
    pedido
  }
}
