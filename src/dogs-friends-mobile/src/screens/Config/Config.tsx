import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native"
import { HeaderAnimation } from "../../components/header/HeaderAnimation"
import { useAuth } from "../../hooks/useAuth"
import * as ImagePicker from 'expo-image-picker';
import { imgFormat } from "../../utils"; 
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

import { styles } from "./style"
import { useState } from "react";
import { File } from "../../api/Files";
import { Cliente } from "../../api/Cliente";
import { URL_IMAGE_BASE } from "../../constants/constants";

const fileRepo = new File()
const clienteRepo = new Cliente()

const Schema = yup.object({
  senha: yup.string().min(6).required("Informe sua senha atual"),
  novaSenha: yup.string().min(6).required("Adicione uma senha"),
  ConfirmaNovaSenha: yup.string().min(6).required("Confirme sua nova senha "),
})


const Config = ({route, navigation}) => {

    const { user, setUser, token } = useAuth()

    const handleUpdatePass = async(data: any) => {
      let dataPass:any = {}
      dataPass.id = user.id
      dataPass.senhaAtual = data.senha
      dataPass.novaSenha = data.novaSenha

      console.log(dataPass)
      if(data.novaSenha !== data.ConfirmaNovaSenha){
        Alert.alert("O campo nova senha e confirmar nova senha devem ser iguais")
        return
      }
      try {
        const response = await clienteRepo.updatePass(dataPass, token)
        if(response.status === 200){
          Alert.alert("Senha atualizada com sucesso!")
          return
        }else{
          Alert.alert("Não foi possivel atualizar a senha")
          return
        }
      } catch (error) {
        Alert.alert("Não foi possivel atualizar a senha")
        return
      }
    }

    const  { control, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(Schema)
    })
    
  const [image, setImage] = useState(`${user.fotoPerfil}`)



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
          let profile = user        
          profile.fotoPerfil = foto
         setImage(foto) 
         setUser(profile)
      }
     
      
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
                        source={{uri: `${URL_IMAGE_BASE}${image}`}}
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
         

         <View >
                  
         <Text style={styles.titleInputs}>Alterar Senha</Text>

        <View style={styles.inputs}>
            <Text style={{alignSelf:"flex-start"}}>{errors.senha ? errors.senha.message : "Senha"}</Text>
           <Controller 
              control={control}
              name="senha"
              render={({field: {onChange, onBlur, value}}) => (  

                  <TextInput
                    style={styles.inputPass}
                    placeholder="Senha Atual"
                    placeholderTextColor="gray"
                    secureTextEntry
                    onChangeText={onChange}
                    value={value}
                  />

                )}
                />

          <Text style={{alignSelf:"flex-start"}}>{errors.novaSenha ? errors.novaSenha.message : "Nova Senha"}</Text>
           <Controller 
              control={control}
              name="novaSenha"
              render={({field: {onChange, onBlur, value}}) => (  
                
                  <TextInput
                    style={styles.inputPass}
                    placeholder="Nova Senha"
                    placeholderTextColor="gray"
                    secureTextEntry
                    onChangeText={onChange}
                    value={value}
                    />
                  )}
                  />

          <Text style={{alignSelf:"flex-start"}}>{errors.ConfirmaNovaSenha ? errors.ConfirmaNovaSenha.message : "Confirmar Senha"}</Text>
           <Controller 
              control={control}
              name="ConfirmaNovaSenha"
              render={({field: {onChange, onBlur, value}}) => (  
                  <TextInput
                    style={styles.inputPass}
                    placeholder="Confirmar Senha"
                    secureTextEntry
                    placeholderTextColor="gray"
                    onChangeText={onChange}
                    value={value}
                    />  
              
            )}
            />
              </View>
                   
          <View style={{width: "100%", marginTop: 20}}>
            <TouchableOpacity style={styles.btnConfirmar} onPress={handleSubmit(handleUpdatePass)}>
              <Text style={{fontFamily: "semibold", color: "#FFFFFF"}}>ALTERAR</Text>
            </TouchableOpacity>
          </View>
               
                </View>

        </View>     
    </HeaderAnimation>
        
    
  )
}

export default Config