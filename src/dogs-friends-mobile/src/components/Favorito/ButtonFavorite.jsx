import { useEffect, useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAuth } from "../../hooks/useAuth";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { api } from "../../api/axios/axios";

export const ButtonFavorite = ({passeadorId}) => {
  const [favorite, setFavorite] = useState(false)
  const {user, token} = useAuth();

  console.log(passeadorId)
  useEffect(() => {
    const id = user.favCliente.filter(p => p.passeadorId == passeadorId)
    
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
   <TouchableOpacity onPress={() => toogleFavorite()}
    style={{width: 42, height: 42, padding: 10, borderWidth: 1, borderRadius: 50, 
        justifyContent:"center", alignItems: "center"}}>
       {
        favorite ? 
              <FontAwesome name="heart-o" size={20} color="black" />
            : <FontAwesome name="heart" size={20} color="red" />
       }
   </TouchableOpacity>
  )
}
