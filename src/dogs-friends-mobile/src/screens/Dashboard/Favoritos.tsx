import { Image, ScrollView, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"

export const Favoritos = ({favoritos}) => {
  console.log(JSON.stringify(favoritos,null,2))
  const navigation = useNavigation()  
  return (
   <View>
        <ScrollView
            horizontal
        >
            {
                favoritos.map((passeador, index) => (
                    <TouchableOpacity key={index} style={styles.cardFav}
                        onPress={() => navigation.navigate("Passeador", {passeadorId: passeador.passeadorId})}>
                        <View>
                            <View>
                                <Image source={{uri: passeador.passeador.fotoPerfil}} 
                                    style={{width: 100, height: 100, borderRadius:5}} />
                            </View>
                            <View>
                                <Text>{ passeador.passeador.nome } {passeador.passeador.sobrenome}</Text>
                                <Text>{passeador.passeador.enderecos[0].cidade}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))
            }

        </ScrollView>
   </View>
  )
}
