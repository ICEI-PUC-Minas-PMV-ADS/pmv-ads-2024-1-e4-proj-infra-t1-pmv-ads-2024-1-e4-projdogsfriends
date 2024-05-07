import { Link } from "react-router-dom";
import { useGetPedidos } from "../hooks"
import { CardPedido } from "./"

export const ListPedidos = ({userId}) => {
  const { pedidos } = useGetPedidos(userId)
    
  return (
    <div>
        {
            (pedidos !==null && pedidos.length > 0) ?
            (
                pedidos.map(pedido => (
                   <CardPedido key={pedido.id} pedido={pedido}/>
                ))
            )
            :
            (
             <div className="w-full h-40 bg-blue-100 rounded-md flex justify-center items-center">
                <div className="flex flex-col items-center justify-center gap-2">
                    <span className="text-sm text-zinc-600">Nenhum pedido ainda?</span>
                    <Link to={"http://localhost:3001/user/pesquisa"} className="text-sm font-bold text-zinc-600">Pesquisar</Link>                    
                </div>
            </div>
            )
        }
    </div>
  )
}
