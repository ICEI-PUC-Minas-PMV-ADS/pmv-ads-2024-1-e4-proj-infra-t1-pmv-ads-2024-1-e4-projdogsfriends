import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; 
import { api } from "../../../api/axios";
import { useSelector } from "react-redux";

export const ButtonFavorite = ({passeadorId}) => {
  const [favorite, setFavorite] = useState(false)
  const {user, token} = useSelector(state => state.auth)
 
  console.log(token)
  console.log(passeadorId)
  useEffect(() => {
    const id = user.favCliente.filter(p => p.passeadorId == passeadorId)
    console.log(id.length)
    if(id.length > 0)
        setFavorite(true)
  },[user])
 
  const toogleFavorite = () => {
   try {
    api.post("cliente/favorito", {
        toogle: !favorite,
        clienteId: user.id,
        passeadorId
    },{
        headers:{
            "Content-Type": 'application/json',            
            'Authorization': `Bearer ${token}`
        }
    })
    setFavorite(() => !favorite)
   } catch (error) {
    console.log(error)
   }
  }  

  return (
    <div className="flex flex-col justify-center items-center">
        <button onClick={() => toogleFavorite()}
            className="w-10 h-10 rounded-full border border-blue-200 flex 
            items-center justify-center transition-all duration-300 hover:shadow-md">
                <span className={`text-lg ${favorite ? "text-red-600" : "text-zinc-700" }`}>
                    {
                        favorite ?   <AiFillHeart/> : <AiOutlineHeart />
                    } </span>  
                    
        </button>
        <span className="text-[10px]">favorito</span>
    </div>
  )
}
