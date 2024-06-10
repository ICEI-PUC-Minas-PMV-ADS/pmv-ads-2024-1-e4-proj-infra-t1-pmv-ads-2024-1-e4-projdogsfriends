import { useEffect, useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAuth } from "../../hooks/useAuth";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { api } from "../../api/axios/axios";
import { Cliente } from "../../api/Cliente";

const cliente = new Cliente()
export const ButtonFavorite = ({passeadorId}) => {
  const [favorite, setFavorite] = useState(false)
  const {user, setUser, token} = useAuth();

 
  useEffect(() => {
    const id = user.favCliente.filter(p => p.passeadorId === passeadorId)
   
    if(id.length > 0)
        setFavorite(true)
    else 
        setFavorite(false)
  },[passeadorId])

 
  const toogleFavorite = async () => {
   try {
    await api.post("cliente/favorito", {
        toogle: !favorite,
        clienteId: user.id,
        passeadorId
    },{
        headers:{
            "Content-Type": 'application/json',            
            'Authorization': `Bearer ${token}`
        }
    })
    const result = await cliente.getCliente(token)
    setUser(result)
    
    setFavorite(() => !favorite)
   } catch (error) {
    console.log(error)
   }
  }  

  return (
   <TouchableOpacity onPress={() => toogleFavorite()}
    style={{width: 42, height: 42, padding: 10, borderWidth: 1, borderRadius: 50, 
        justifyContent:"center", alignItems: "center"}}>
       {
        favorite ? 
            <FontAwesome name="heart" size={20} color="red" />
            : <FontAwesome name="heart-o" size={20} color="black" />
       }
   </TouchableOpacity>
  )
}
