import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Cliente } from "../../api/Cliente"
import { useEffect } from "react"
import { useAuth } from "../../hooks/useAuth"
import { Auth } from "../../api/Auth"
import { useNavigation } from "@react-navigation/native"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const Home = () => {
  const navigation = useNavigation()

  return (
    <View>
        
        
        <View>
          <ImageBackground source={require('../../../assets/images/bghome.png')}
            style={styles.bghome} />
        </View>

      <View style={styles.logo}>
        <Image source={require("../../../assets/images/logo.png")} style={styles.imgLogo} resizeMode="contain"/>

      </View>

     <View style={styles.actions}>
       <View style={styles.info}>
          <Text style={styles.title}>Precisa de Alguém Para Passear Com Seu Pet?</Text>

          <Text style={styles.subtitle}>Cadastre-se ou faça login para encontrar pessoas dispostas a passear e dar carinho e atenção ao seu Pet.</Text>  
        </View>
        <View style={styles.content}>
                <TouchableOpacity style={styles.btnCadastro}
                  onPress={() => navigation.navigate("Cadastro")}
                >
                    <Text style={styles.textCadastro}>Cadastre-se</Text>    
                </TouchableOpacity> 
               
                <TouchableOpacity style={styles.btnLogin}
                   onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.textLogin}>Login</Text>    
                </TouchableOpacity> 
       </View>
   
     </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  bghome:{
    width:"100%",
    height:"96%", 
    zIndex:1,
  },

  info:{
    width: "100%",
    
    marginTop: 20,
    paddingHorizontal:20
  },

  logo:{
    position:"absolute",
    zIndex:12,
    backgroundColor: "#EFEFEF",
    alignSelf:"center",
    top:height * 0.04,   
    width: 75,
    height:75,
    borderRadius: 40,
    borderWidth:1,
    borderColor: "#999"
  },
  imgLogo:{
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  title:{
    textAlign:"center",
    fontFamily: "bold",
    fontSize: 24,
    
  },
  subtitle:{
    fontFamily: "light",
    fontSize: 12,
    textAlign:"center",
    marginTop:10
  },

  actions:{
    position: "absolute",
    alignSelf: "center",
    top: height * 0.57,    
    zIndex:10,
    width: "100%",
    height: height * 0.42,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 6,
    alignItems: "center",
    flexDirection: "column",
    gap:24
  },

  content:{
    width: "100%",
    justifyContent:"center",
    alignItems: "center" ,
    gap: 10,
  
  },

  btnCadastro:{
    width:"90%",
    height: 54,
    justifyContent: "center",
    alignItems:"center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#8CCB9F",
    backgroundColor:"#308AAD",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.5,

    elevation: 2,
},

btnLogin:{
  width:"90%",
  height: 54,
  justifyContent: "center",
  alignItems:"center",
  borderWidth: 1,
  borderRadius: 5,
  borderColor: "#8CCB9F",
  backgroundColor:"#ADC8D2",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.5,

  elevation: 2,
},
textCadastro:{
    fontFamily:"bold",
    color: "#FFFFFF"
},
textLogin:{
  fontFamily:"bold",
  color: "#FFFFFF"
},
})


export default Home