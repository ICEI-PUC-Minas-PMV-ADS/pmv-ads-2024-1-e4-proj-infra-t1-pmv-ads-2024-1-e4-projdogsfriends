import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get("window").height

export const styles = StyleSheet.create({
    container:{
        padding: 20,
        marginHorizontal:5,
        height: height,
        top: 0,
        zIndex: 1,
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        gap:20
    }
})