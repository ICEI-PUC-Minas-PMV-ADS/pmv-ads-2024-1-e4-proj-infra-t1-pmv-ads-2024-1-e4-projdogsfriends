import { Image, Text, View } from "react-native"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

export const Card = ({ pedido }) => {
  const navigation = useNavigation();
 
  return (
    <View style={styles.card}>
        <View>
            <Image source={{uri: pedido.passeador.fotoPerfil}} 
                style={{width: 100, height: 100, borderRadius: 50}} />
        </View>
        <View>
            <Text>{pedido.passeador.nome}</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Pedido",{ pedidoId: pedido.id })}>
              <Text>Visualizar</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
