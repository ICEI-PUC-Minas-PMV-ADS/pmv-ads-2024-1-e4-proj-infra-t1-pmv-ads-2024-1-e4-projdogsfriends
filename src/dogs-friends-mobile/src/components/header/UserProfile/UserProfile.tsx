import { View, Text, Image, TouchableOpacity } from "react-native"

import {styles} from "./styles"
import { useAuth } from "../../../hooks/useAuth"
import { URL_IMAGE_BASE } from "../../../constants/constants";


export const UserProfile = () => {
  
  const { user } = useAuth();

  return (
   <View style={styles.content}>
    
    <View style={styles.profileImgContainer}>
    {
            user.fotoPerfil ?
              <Image 
                source={{uri: `${URL_IMAGE_BASE}${user.fotoPerfil}`}}
                style={styles.profileImg} 
              />   
              :
              <Image 
              source={require("../../../../assets/images/imgperfil.png")}
              style={styles.profileImg} 
          />   
           }              
    </View>
    <Text style={styles.userName}>Olá {user.nome}</Text>
   </View>
  )
}


