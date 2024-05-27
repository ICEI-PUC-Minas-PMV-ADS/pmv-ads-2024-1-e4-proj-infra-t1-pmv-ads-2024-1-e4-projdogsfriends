import { Image, ScrollView, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { styles } from "./styles"

export const Favoritos = ({favoritos}) => {
  return (
   <View>
        <ScrollView
            horizontal
        >
            {
                favoritos.map(({passeador}, index) => (
                    <TouchableOpacity key={index} style={styles.cardFav}>
                        <View>
                            <View>
                                <Image source={{uri: passeador.fotoPerfil}} 
                                    style={{width: 100, height: 100, borderRadius:5}} />
                            </View>
                            <View>
                                <Text>{ passeador.nome } {passeador.sobrenome}</Text>
                                <Text>{passeador.enderecos[0].cidade}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))
            }

        </ScrollView>
   </View>
  )
}
