import {Dimensions, StyleSheet} from "react-native"

const height = Dimensions.get("window").height

export const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
        height: height
    },
    card:{
        flexDirection: "row",
        borderRadius: 7,
        padding: 10, 
        borderWidth:1,
        borderColor: "#D1D0D0"
    }
})