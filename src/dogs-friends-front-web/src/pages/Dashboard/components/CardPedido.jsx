import { Link } from "react-router-dom"

export const CardPedido = ({ pedido }) => {
    console.log(pedido)
    return (   
      <> 
          <div  
            className=" bg-white mt-2 lg:bg-blue-900/5 rounded shadow-md
              hover:shadow-slate-400 transition-all duration-300 p-2 border-zinc-200 cursor-pointer">
             <Link to={`http://localhost:3001/user/dashboard/pedidos/${pedido.id}`}> 
              <div className="flex flex-col lg:flex-row gap-2 w-full">
                <div className="flex w-32 h-24 justify-center">
                  <img 
                    className=" rounded-full w-24 h-24 object-cover"                
                    src={`${pedido.passeador.fotoPerfil}`} />
                </div>
  
                <div className=" flex flex-col gap-[2px] h-full p-2 lg:p-0 w-full">
                  <div className="flex flex-row justify-between">
                   <h3 className=" font-semibold text-lg">{} </h3>
                    <span className="text-sm">{ pedido.passeio.realizado ? "concluido" : "não concluido"}</span>
                  </div>
                  <span className="font-semibold text-sm text-green-950">Belo Horizonte, MG</span>
                  <span className="poppins">Data: {pedido.agendaPasseador.data}</span>
                  <div className="flex flex-row justify-between">
                 
                  <div className="flex gap-2">
                     
                  </div>
  
                
                  </div>
                  
                  <span className=" text-end align-text-bottom font-bold text-sm text-green-950">Vizualizar</span>
                </div>
            </div>
            </Link>
          </div>
  
  
          </>
    )
  }
  