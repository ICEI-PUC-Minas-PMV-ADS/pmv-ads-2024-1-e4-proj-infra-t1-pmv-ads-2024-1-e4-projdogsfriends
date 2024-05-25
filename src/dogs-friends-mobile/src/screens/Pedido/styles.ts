import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get("window").height

export const styles  = StyleSheet.create({
    container:{
        backgroundColor: "#FFFFFF",
        height: height
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
        width:"80%",
        height: 50,
        justifyContent: "center",
        alignItems:"center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#8CCB9F",
        backgroundColor:"#E9F0EB"
    },

    textAceitar:{
        fontFamily:"bold"
    },

})