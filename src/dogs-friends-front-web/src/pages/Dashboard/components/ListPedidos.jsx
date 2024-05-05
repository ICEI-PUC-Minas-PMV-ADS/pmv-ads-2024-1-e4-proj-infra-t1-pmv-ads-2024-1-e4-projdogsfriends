import { useGetPedidos } from "../hooks"
import { CardPedido } from "./"

export const ListPedidos = ({userId}) => {
  const { pedidos } = useGetPedidos(userId)
    
  return (
    <div>
        {
            pedidos ?
            (
                pedidos.map(pedido => (
                   <CardPedido key={pedido.id} pedido={pedido}/>
                ))
            )
            :
            (
                <div>
                    nenhum pedido
                </div>
            )
        }
    </div>
  )
}
