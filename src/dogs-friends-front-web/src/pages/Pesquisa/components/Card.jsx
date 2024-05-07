import { Link } from "react-router-dom"
import { Stars } from "../../../components/stars/stars"

export const Card = ({ client, setActiveMarker, index }) => {
    
  return (   
    <> 
        <div onMouseOver={() => setActiveMarker(index)} 
          className=" bg-white mt-2 lg:bg-blue-900/5 rounded shadow-md
            hover:shadow-slate-400 transition-all duration-300 p-2 border-zinc-200 cursor-pointer">
           <Link to={`http://localhost:3001/user/passeador/${client.id}`}> 
            <div className="flex flex-col lg:flex-row gap-2 w-full">
              <div className="rounded">
                <img 
                  className=" rounded lg:w-32 h-32 w-full object-cover"                
                  src={`${client.fotoPerfil}`} />
              </div>

              <div className=" flex flex-col gap-[2px] h-full p-2 lg:p-0 w-full">
                <div className="flex flex-row justify-between">
                 <h3 className=" font-semibold text-lg">{client.nome} {client.sobrenome}</h3>
                  <span className="text-2xl">♡</span>
                </div>
                <span className="font-semibold text-sm text-green-950">{client.enderecos[0].cidade}, {client.enderecos[0].uf}</span>
                <span className="poppins">Amante dos animais responsável em busca de amigos peludos</span>
                <div className="flex flex-row justify-between">
               
                <div className="flex gap-2">
                  <Stars number={5}/> <span>5</span>
                </div>

                  <div>
                    25 clientes 
                  </div>
                </div>
                
                <span className=" text-end align-text-bottom font-bold text-sm text-green-950">Disponivel</span>
              </div>
          </div>
          </Link>
        </div>


        </>
  )
}
