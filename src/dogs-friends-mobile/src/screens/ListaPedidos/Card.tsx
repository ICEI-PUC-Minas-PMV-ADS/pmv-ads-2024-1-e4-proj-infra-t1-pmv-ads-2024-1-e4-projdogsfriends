import { Image, Text, View } from "react-native"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import { URL_IMAGE_BASE } from "../../constants/constants"

export const Card = ({ pedido }) => {
  const navigation = useNavigation();
 
  return (
    <TouchableOpacity style={styles.card}
    onPress={() => navigation.navigate("Pedido",{ pedidoId: pedido.id })}
    >
        <View>
            <Image source={{uri: `${URL_IMAGE_BASE}${pedido.cliente.fotoPerfil}`}} 
                style={{width: 70, height: 70, borderRadius: 40}} />
        </View>
        <View style={{padding: 5, width: "80%", height:"100%"}}>
            <Text>{pedido.cliente.nome}, requisitou o seus serviços</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Pedido",{ pedidoId: pedido.id })}
              style={{alignSelf:"flex-end"}}
            >
              <Text>Visualizar</Text>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}
