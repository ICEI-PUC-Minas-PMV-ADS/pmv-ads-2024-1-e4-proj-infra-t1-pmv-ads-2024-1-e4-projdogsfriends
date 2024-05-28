import { Image, Text, View } from "react-native"
import { styles } from "../header/UserProfile/styles"

export const Card = ({passeador}) => {
 
   return (
    <View style={styles.card}>
        <View style={styles.content}>
            <View>
               {
                passeador.fotoPerfil ? 
                (

                <Image source={{uri: passeador.fotoPerfil}} 
                style={{width: 70, height: 70, borderRadius:50}} />
            
                ): (  
                    <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"}} 
                    style={{width: 70, height: 70, borderRadius:50}} />
                   )
               }
            </View>

            <View>
                <Text>{ passeador.nome } { passeador.sobrenome }</Text>
                <Text>{ passeador.enderecos[0].cidade }</Text>
                <View style={{ width:"85%", flexDirection: "row", justifyContent:"space-between" }}>
                    <Text>{ passeador.enderecos[0].bairro }</Text>
                    <Text>visualizar</Text>
                </View>
            </View>
        </View>
    </View>
   )
}