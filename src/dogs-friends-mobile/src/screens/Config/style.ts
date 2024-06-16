import { Dimensions, StyleSheet } from "react-native"

const widthScreen = Dimensions.get("screen").width
const heightScreen = Dimensions.get("screen").height

export const styles = StyleSheet.create({

    container:{
        alignItems: "center",
        width: "100%", 
       },
        profileImgContainer: {
            width: widthScreen * 0.3,
            height: widthScreen * 0.3,
            backgroundColor: '#999',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:  widthScreen * 0.2,
            zIndex:10
          },
          profileImg: {
            width: widthScreen * 0.3,
            height: widthScreen * 0.3,
            borderRadius:  widthScreen * 0.2,
            zIndex:10
          },
      
          inputPass:{
            paddingLeft: 10,
            width: "100%",
            height: heightScreen * 0.07,
            borderWidth: 1,
          
          },
      
          inputs:{
            width: "100%",
            gap:10, 
            marginTop:heightScreen*0.05,
            justifyContent:"center",
            alignItems: "center",
            paddingHorizontal: widthScreen*0.05,            
      
          },

          titleInputs:{
            alignSelf:"flex-start",
            fontSize: widthScreen * 0.05,
            fontWeight: "500"
          },


  btnConfirmar:{
    width:"100%",
    height: 54,
    justifyContent: "center",
    alignItems:"center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#FFFFFF",
    backgroundColor:"#1E5FC9",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.5,

    elevation: 2,
},
})