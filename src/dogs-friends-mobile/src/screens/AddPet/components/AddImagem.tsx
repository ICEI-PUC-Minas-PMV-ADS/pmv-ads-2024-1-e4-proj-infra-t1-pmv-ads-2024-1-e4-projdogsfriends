import { Text, View, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import * as ImagePicker from 'expo-image-picker';
import { imgFormat } from '../../../utils';
import { useState } from 'react';
import { Images } from './Images';

export const AddImagem = ({imagens, setImagens}) =>  {
      
    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });


    if (!result.canceled) {
        const file = imgFormat(result.assets[0].uri)
        setImagens(imagens => [...imagens, file]); 
        try{
          
        }catch(err){
          console.log(err)
        }
        
      }
    };
 
  
    
        //EEF0FF
    return (
     <View style={styles.container}>

 
        <TouchableOpacity style={styles.addContent}
            onPress={() => pickImage()}
            activeOpacity={0.9}
        >
            <Image source={require("./../../../../assets/images/dogup.png")} 
            resizeMode='contain'
            style={{width:50, height: 100,}}/>
            <Text>Add Imagem</Text>
        </TouchableOpacity>

        {
                imagens.length > 0 && 
               <Images imagens={imagens} setImagens={setImagens}/>
        }
     </View>
    )

}

