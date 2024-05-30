import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        backgroundColor: "#FFFFFF",
        bottom: 30,
        paddingVertical: 20,
        paddingHorizontal:24,
    },
    card:{
        flexDirection:"row",
        gap:16
    },
    content:{
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
    },

    btnContratar:{
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 6,
        backgroundColor: "#1e40af"
    },

    textBtnContratar:{
        color: "#FFFFFF",
        fontFamily: "bold",
        fontSize: 12        
    }
})