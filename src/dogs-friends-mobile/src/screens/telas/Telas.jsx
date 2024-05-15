import { useState } from "react";
import { useNavigation } from "@react-navigation/native"
import { View, Button, StyleSheet, Image } from "react-native"
import * as ImagePicker from 'expo-image-picker';

import { imgFormat } from "../../utils";
import { File } from "../../api/Files";

const FileController = new File()

const Telas = () => {
  const [image, setImage] = useState(null);
  const navigation = useNavigation()  

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
        const url = await FileController.upload(file)       
        setImage(url);
      }catch(err){
        console.log(err)
      }
      
    }
  };

  
  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />    
      {
       image && <Image source={{uri: `http://localhost:3000/files/file/${image}`}} style={{width:500, height:600}}/>
      }
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 600,
    height: 500,
  },
});

export default Telas