import React, { useState } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'

const Login = () => {
  const [click, setClick] = useState(false);
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");
  const logo = require('../../../assets/images/logo.png');
  return (

    <SafeAreaView style={styles.container}>

      <Image source={logo} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>Bem Vindo!</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder='EMAIL' value={username} onChangeText={setUsername} autoCorrect={false} required
          autoCapitalize='none' />
        <TextInput style={styles.input} placeholder='SENHA' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false} required
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
        <Pressable style={styles.button} onPress={() => Alert.alert("clicou")}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

      </View>


      <View style={styles.rememberView} >
        <Text style={styles.footerText}>Não tem cadastro? </Text>
        <Pressable onPress={() => Alert.alert("cadastrar nova nenha")}>
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