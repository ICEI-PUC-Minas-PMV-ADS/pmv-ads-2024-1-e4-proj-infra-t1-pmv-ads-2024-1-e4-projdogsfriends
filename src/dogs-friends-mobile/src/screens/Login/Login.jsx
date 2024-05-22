import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import { useAuth } from "../../hooks/useAuth"
import { string } from 'yup'
const Login = () => {
  const  navigation  = useNavigation()
  const [click, setClick] = useState(false);
  const {startLogin, user} = useAuth();
  
  const logo = require('../../../assets/images/logo.png');

  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  })



  const handleLogin = async () => {
  


    try {
     
      console.log(startLogin(formData))
      await startLogin(formData); 
     navigation.navigate('Dashboard');
     
    } catch (error) {
      console.log('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    }
  };

  const handleChange = (name, value) => {
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
      
    }));
    


  };


  return (

    <SafeAreaView style={styles.container}>

      <Image source={logo} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>Bem Vindo!</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder='EMAIL' value={formData.email} onChangeText={(text)=>handleChange('email',text)} autoCorrect={false} required
          autoCapitalize='none' />
        <TextInput style={styles.input} placeholder='SENHA' secureTextEntry value={formData.senha} onChangeText={(text)=>handleChange('senha',text)} autoCorrect={false} required
          autoCapitalize='none' />
      </View>
      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch value={click} onValueChange={setClick} trackColor={{ true: "green", false: "gray" }} />
          <Text style={styles.rememberText}>Lembrar-me</Text>
        </View>
        <View>
          <Pressable onPress={() => Alert.alert("cadastrar nova nenha")}>
            <Text style={styles.forgetText}>Esqueceu a senha?</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

      </View>


      <View style={styles.rememberView} >
        <Text style={styles.footerText}>Não tem cadastro? </Text>
        <Pressable onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.signup}>Cadastre-se</Text>
        </Pressable>



      </View>



    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
  },
  image: {
    height: 160,
    width: 170
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


})

export default Login