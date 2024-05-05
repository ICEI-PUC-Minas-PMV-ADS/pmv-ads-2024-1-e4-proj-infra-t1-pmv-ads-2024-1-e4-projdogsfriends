import { AiOutlineHeart } from "react-icons/ai"; 
import { Stars } from "../../../components/stars/stars"
import { useNavigate } from 'react-router-dom';

export const Card = ({client}) => {
      
  const navigate = useNavigate();

  const handleContratarClick = () => {
    navigate('/user/agendamento/', { state: { client } });
  };

  return (
    <div className="w-[100%] flex flex-col gap-4">
        <div className="flex w-full flex-col justify-center items-center">
            <div className="rounded-full">
                <img 
                     src={client.fotoPerfil} alt={`${client.nome}`}
                     className="w-24 h-24 object-cover rounded-full"
                    />
            </div>

            <span className="text-2xl font-medium ">{client.nome} {client.sobrenome}</span>
            <span className="text-sm text-green-950">{ client.enderecos[0].cidade }, { client.enderecos[0].uf }</span>
            
            <div className="flex gap-2 text-sm">
              <Stars number={1}/> <span>5</span> * <span>14 reviews</span>
            </div>
        </div>

        <div onClick={handleContratarClick} className="flex flex-row gap-6 items-center px-2">
            <button className="px-8 p-2 bg-blue-800 hover:bg-blue-700 text-zinc-100 text-sm
             rounded-full transition-all duration-300 hover:shadow-md">
              Contratar {client.nome}
            </button>

            <button className="w-10 h-10 rounded-full border border-blue-200 flex 
              items-center justify-center transition-all duration-300 hover:shadow-md">
             <span className="text-lg"> <AiOutlineHeart /> </span>  
            </button>
        </div>

    </div>
  )
}
