import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadImage = ({style, value,onChange }) => {
  const [image, setImage] = useState(value);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onChange(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }}  />
        ) : (
          <View style={{ width: 200, height: 200, borderRadius: 100, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Selecionar Foto</Text>
          </View>
        )}
      </TouchableOpacity>
     
    </View>
  );
};

export default UploadImage;
