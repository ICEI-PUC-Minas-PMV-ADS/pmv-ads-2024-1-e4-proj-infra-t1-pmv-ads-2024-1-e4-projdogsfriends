import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { HeaderAnimation } from "../../components/header/HeaderAnimation"
import { useAuth } from "../../hooks/useAuth"
import * as ImagePicker from 'expo-image-picker';
import { imgFormat } from "../../utils"; 

import { styles } from "./style"
import { useState } from "react";
import { File } from "../../api/Files";
import { Cliente } from "../../api/Cliente";
import { URL_IMAGE_BASE } from "../../constants/constants";

const fileRepo = new File()
const clienteRepo = new Cliente()

const Config = ({route, navigation}) => {

  const [image, setImage] = useState({})

  const { user, setUser, token } = useAuth()

  console.log(user)
  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


if (!result.canceled) {
    const file = imgFormat(result.assets[0].uri)
    
    try{
      const foto = await fileRepo.upload(file)
      const data = await clienteRepo.updatePhoto(foto, user.id, token)
      if(data.status === 200){
        user.fotoPerfil = foto
      }
      setUser(user)
      
    }catch(err){
      console.log(err)
    }
    
  }
};

  return (
    <HeaderAnimation route={route} navigation={navigation}>
       <View>
        <View style={{width: "100%", alignItems:"center"}}>
            <View>
                {
                    user.fotoPerfil ?
                    <Image 
                        source={{uri: `${URL_IMAGE_BASE}${user.fotoPerfil}`}}
                        style={styles.profileImg} 
                    />   
                    :
                    <Image 
                    source={require("../../../assets/images/imgperfil.png")}
                    style={styles.profileImg} 
                />   
                
            }  
            </View>
           <TouchableOpacity onPress={() => pickImage()}>
                 <Text>Alterar Foto</Text>
            </TouchableOpacity> 
            
         </View>
         

         <View style={styles.inputs}>
                  
                  <Text style={styles.titleInputs}>Alterar Senha</Text>

                  <TextInput
                    style={styles.inputPass}
                    placeholder="Senha Atual"
                  />
                
                  <TextInput
                    style={styles.inputPass}
                    placeholder="Nova Senha"
                  />
                  
                  <TextInput
                    style={styles.inputPass}
                    placeholder="Confirmar Senha"
                  />  
                   
                   <View style={{width: "100%", marginTop: 20}}>
            <TouchableOpacity style={styles.btnConfirmar} onPress={() => {}}>
              <Text style={{fontFamily: "semibold", color: "#FFFFFF"}}>ALTERAR</Text>
            </TouchableOpacity>
          </View>
               
                </View>

        </View>     
    </HeaderAnimation>
        
    
  )
}

export default Config