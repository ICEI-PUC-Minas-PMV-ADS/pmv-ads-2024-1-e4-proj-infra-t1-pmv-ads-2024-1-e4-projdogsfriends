import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({


    container:{
        width: width-30,
        
        justifyContent:"center",
        alignItems: "center",
        gap: 12
    },

    addContent:{
        width: width * 0.3,
        height: height * 0.15,

        backgroundColor: "#EEF0FF",
        borderWidth: 0.5,
        borderStyle: "dashed",
        borderRadius: 7,

        alignItems: "center",
        justifyContent: "center"
    },

    btnAddPet:{
        width: width * 0.7,
        height: height * 0.07,

        backgroundColor: "#4C4DDC",
        borderRadius: 3,
        justifyContent:"center",
        alignItems: "center",
    },
    textAddPet:{
        fontFamily: "semibold",
        color: "#FFFFFF"
    },

    imageToUpload:{
        width: width * 0.14,
        height: height * 0.07,

        borderRadius: 10,
        borderWidth: 1,
        borderStyle: "dashed"
    },

    imageContent:{
        justifyContent:"center",
        alignItems: "center",
        flexDirection:'column',
    },
    imagesContent:{
        flexDirection: 'row',
        gap:10,
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 40,
        width: '100%',
      },

      imageView:{
        position:"absolute",
        width: width,
        height: 200,
        alignItems:"center",
        backgroundColor: "#EEF0FF"
      }

})