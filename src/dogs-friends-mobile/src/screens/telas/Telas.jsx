import { useNavigation } from "@react-navigation/native"
import { View, Button } from "react-native"

const Telas = () => {
  const navigation = useNavigation()  
  return (
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
         <Button onPress={() => navigation.navigate("home")}  title="HOME"/>
    </View>
  )
}

export default Telas