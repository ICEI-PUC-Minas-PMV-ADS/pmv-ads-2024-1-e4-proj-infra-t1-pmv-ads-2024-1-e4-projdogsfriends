import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({


    container:{
        width: width,

        justifyContent:"center",
        alignItems: "center"
    },

    addContent:{
        width: width * 0.3,
        height: height * 0.15,

        backgroundColor: "#AAABD5",
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
        width: width * 0.15,
        height: height * 0.07,

        borderRadius: width * 0.15,
        borderWidth: 1,
        borderStyle: "dashed"
    }


})