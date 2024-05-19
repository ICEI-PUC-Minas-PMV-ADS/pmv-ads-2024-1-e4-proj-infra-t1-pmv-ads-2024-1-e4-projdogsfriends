import { useState } from 'react';
import React from 'react';
import UploadImage from '../../components/cadastro/UploadImage'

import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'

const Cadastro = () => {
  const [formData, setFormData] = useState({
    isPasseador: false,
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    cpf: '',
    fotoPerfil: null,
    sobreMim: '',
    telefones: {
      codigo: '',
      numero: ''
    },

    enderecos: {
      cep: '',
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      uf: ''

    }




  });

  const stringifyFormData = JSON.stringify(formData);

  const handleChange = (name, value) => {
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
      
    }));
    


  };

  const handle = (key, value) => {
    if (key.includes('.')) {
      // Se a chave incluir '.', significa que é um subcampo (como telefones.codigo)
      const [parentKey, childKey] = key.split('.');
      setFormData({
        ...formData,
        [parentKey]: {
          ...formData[parentKey],
          [childKey]: value
        }
      });
    } else {
      // Caso contrário, é um campo direto
      setFormData({
        ...formData,
        [key]: value
      });
    }

   
  }

  
  

  const [click, setClick] = useState(false);
  const handleImageChange = (image) => {
    setFormData({
      ...formData,
      fotoPerfil: image
    });
  };

  const handleSwitchChange = (value) => {
    setFormData({
      ...formData,
      isPasseador: value
    });
  };
  

return(
  <ScrollView style={{flexGrow:1}}>
    <UploadImage style={styles.image } value={formData.fotoPerfil} onChange={handleImageChange}/>
    <View>
    {formData.fotoPerfil && (
        <Image
          source={{ uri: formData.fotoPerfil }}
          style={styles.image}
        />
      )}

    </View>
    
  
  <Text style={styles.title}>Cadastro</Text>
  <View style={styles.switch}>
      <Switch value={formData.isPasseador} onValueChange={handleSwitchChange} trackColor={{ true: "blue", false: "gray" }} />
      <Text style={styles.rememberText}>Passeador</Text>
    </View>
  <View style={styles.inputView}>
    <TextInput style={styles.input} placeholder='EMAIL' value={formData.email} onChangeText={(text)=>handleChange('email',text)} autoCorrect={false} 
      autoCapitalize='none' />
    <TextInput style={styles.input} placeholder='SENHA'  value={formData.senha} onChangeText={(text)=>handleChange('senha',text)} autoCorrect={false} 
      autoCapitalize='none' />
       <TextInput style={styles.input} placeholder='NOME' value={formData.nome} onChangeText={(text)=>handleChange('nome',text)} autoCorrect={false} 
      autoCapitalize='none' />
    <TextInput style={styles.input} placeholder='SOBRENOME'  value={formData.sobrenome} onChangeText={(text)=>handleChange('sobrenome',text)} autoCorrect={false} 
      autoCapitalize='none' />
       <TextInput style={styles.input} placeholder='CPF' value={formData.cpf} onChangeText={(text)=>handleChange('cpf',text)} autoCorrect={false} 
      autoCapitalize='none' />
<View style={styles.row}>
<TextInput style={styles.inputMin} placeholder='DDD'  value={formData.telefones.codigo} onChangeText={(text)=>handle('telefones.codigo',text)} autoCorrect={false} 
      autoCapitalize='none' />
       <TextInput style={styles.input} placeholder='TELEFONE' value={formData.telefones.numero} onChangeText={(text)=>handle('telefones.numero',text)} autoCorrect={false} 
      autoCapitalize='none' />


</View>
   

<TextInput style={styles.input} placeholder='ENDEREÇO' value={formData.enderecos.logradouro} onChangeText={(text)=>handle('enderecos.logradouro',text)} autoCorrect={false} 
      autoCapitalize='none' />
    <TextInput style={styles.input} placeholder='NUMERO'  value={formData.enderecos.numero} onChangeText={(text)=>handle('enderecos.numero',text)} autoCorrect={false} 
      autoCapitalize='none' />
       <TextInput style={styles.input} placeholder='BAIRRO' value={formData.enderecos.bairro} onChangeText={(text)=>handle('enderecos.bairro',text)} autoCorrect={false} 
      autoCapitalize='none' />

      <View style={styles.row}>
      <TextInput style={styles.input} placeholder='CIDADE'  value={formData.enderecos.cidade} onChangeText={(text)=>handle('enderecos.cidade',text)} autoCorrect={false} 
      autoCapitalize='none' />
       <TextInput style={styles.inputMin} placeholder='U.F.' value={formData.enderecos.uf} onChangeText={(text)=>handle('enderecos.uf',text)} autoCorrect={false} 
      autoCapitalize='none' />


      </View>
    
    <TextInput style={styles.input} placeholder='CEP'  value={formData.enderecos.cep} onChangeText={(text)=>handle('enderecos.cep',text)} autoCorrect={false} 
      autoCapitalize='none' />
     <TextInput style={styles.textArea} multiline={true} numberOfLines={2} placeholder='SOBRE MIM' value={formData.sobreMim} onChangeText={(text)=>handleChange('sobreMim',text)} autoCorrect={false} 
      autoCapitalize='none' />
    
  </View>
 

  <View style={styles.buttonView}>
    <Pressable style={styles.button} onPress={() => console.log(stringifyFormData)}>
      <Text style={styles.buttonText}>Salvar</Text>
    </Pressable>

  </View>


  



</ScrollView>
)

}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "blue"
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5
  },
  input: {
    flex:2,
    height: 50,
    paddingHorizontal: 20,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 7
  },
  inputMin: {
    flex:1,
    height: 50,
    paddingHorizontal: 20,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 7
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center"

  },
  rememberText: {
    fontSize: 13
  },
  forgetText: {
    fontSize: 11,
    color: "blue"
  },
  button: {
    backgroundColor: "blue",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23
  },
  icons: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: "center",
    color: "gray",
  },
  signup: {
    color: "blue",
  },

  textArea: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    height: 60, 
  },


})

 



  export default Cadastro;
  
  