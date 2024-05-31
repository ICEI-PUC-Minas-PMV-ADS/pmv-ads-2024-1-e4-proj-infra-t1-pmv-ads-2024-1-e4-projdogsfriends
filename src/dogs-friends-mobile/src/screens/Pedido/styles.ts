import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get("window").height

export const styles  = StyleSheet.create({
    container:{
        backgroundColor: "#FFFFFF",
        height: height,
        padding: 20,
        bottom: 30,
        borderTopRightRadius:12,
        borderTopLeftRadius:12
    },
    clienteInfo:{
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    content:{
      width: "100%",
      justifyContent:"center",
      alignItems: "center" ,
      top: 50,
      gap: 5,
    
    },
    btnAceitar:{
        width:"100%",
        height: 50,
        justifyContent: "center",
        alignItems:"center",
        borderWidth: 1,
        borderRadius: 25,
        borderColor: "#8CCB9F",
        backgroundColor:"#E9F0EB"
    },

    btnRecusar:{
        width:"100%",
        height: 50,
        justifyContent: "center",
        alignItems:"center",
        borderWidth: 1,
        borderRadius: 25,
        borderColor: "#F3BBBB",
         
    },

    textAceitar:{
        fontFamily:"bold"
    },

    textRecusar:{
        fontFamily:"bold",
        color:"#F3BBBB"
    },
})