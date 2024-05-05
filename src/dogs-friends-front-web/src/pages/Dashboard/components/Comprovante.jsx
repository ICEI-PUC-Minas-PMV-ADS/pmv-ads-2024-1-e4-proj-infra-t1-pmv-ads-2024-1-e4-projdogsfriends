import { Link } from "react-router-dom"
import { useGetPedido } from "../hooks/useGetPedido"
import React from "react"

export const Comprovante = React.memo(( { pedidoId } ) => {

  const {pedido} = useGetPedido(pedidoId)
  console.log(pedido)
  return (
    <div>
      {
        pedido ?
         (
          <div className="flex h-screen w-full items-center justify-center">
      <div className="w-full h-full bg-gray-50 px-6 pt-8 shadow-lg">
        Comprovante
        <div className="flex flex-col gap-3 border-b py-6 text-xs">
          <p className="flex justify-between">
            <span className="text-gray-400">Pedido</span>
            <span>{pedido.id}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-400">Concluido:</span>
            <span 
              className={`p-2 font-bold rounded ${pedido.passeio.realizado ? "bg-green-300" : "bg-red-300"}`}
             >{pedido.passeio.realizado ? "concluido" : "não concluido"}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-400">Cliente:</span>
            <span>{pedido.cliente.nome} { pedido.cliente.sobrenome }</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-400">Passeador:</span>
            <span>{pedido.passeador.nome} {pedido.passeador.sobrenome}</span>
          </p>
        </div>
        <div className="flex flex-col gap-3 pb-6 pt-2 text-xs">
          <table className="w-full text-left">
            <thead>
              <tr className="flex">
                <th className="w-full py-2">Pet's</th>
                <th className="min-w-[44px] py-2">QTD</th>
                <th className="min-w-[44px] py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex">
                <td className="flex-1 py-1">Scooby, Pipoca</td>
                <td className="min-w-[44px]">2</td>
                <td className="min-w-[44px]">R$ {pedido.precoTotal}</td>
              </tr>
             
            </tbody>
          </table>
          <div className=" border-b border border-dashed"></div>

          <div className="flex justify-end">
            {
              pedido.passeio.realizado ? <></> : (
                <Link to={`http://localhost:3001/user/dashboard/pedido/finalizar/${pedido.passeio.id}`} 
                  className="mt-4 px-6 py-2 bg-green-200 rounded">
                  Concluir
                </Link>
              )
            }
          </div>

        </div>
      </div>
  </div>
         )
         :
         (
          <div></div>
         )
      }
    </div>
  )
})
