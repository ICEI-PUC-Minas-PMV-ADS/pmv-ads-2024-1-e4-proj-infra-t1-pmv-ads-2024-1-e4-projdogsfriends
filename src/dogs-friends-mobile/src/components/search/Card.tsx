import { Image, Text, View } from "react-native"
import { styles } from "../header/UserProfile/styles"

export const Card = ({passeador}) => {
    console.log(passeador)
   return (
    <View >
        <View style={styles.content}>
            <View>
               {
                passeador.fotoPerfil ? 
                (

                <Image source={{uri: passeador.fotoPerfil}} 
                style={{width: 100, height: 100}} />
            
                ): (  
                    <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"}} 
                    style={{width: 100, height: 100}} />
                   )
               }
            </View>

            <View>
                <Text>{ passeador.nome } { passeador.sobrenome }</Text>
            </View>
        </View>
    </View>
   )
}