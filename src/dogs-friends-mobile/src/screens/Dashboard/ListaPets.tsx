import { Image, Text, View } from "react-native"
import { URL_IMAGE_BASE } from "../../constants/constants"
import { ScrollView } from "react-native-gesture-handler"

export const ListaPets = ({pets}) => {
    
  return (
    <View>
        <ScrollView
            horizontal

           
            >
        {
            pets.map((pet) => (
                <View key={pet.id}  style={{marginRight:10}}>
                   <View>
                        {
                             pet.imagens[0] ? 
                             <Image source={{ uri: `${URL_IMAGE_BASE}${pet.imagens[0].url}`}} 
                                style={{width:100, height:100, borderRadius: 5}}/>
                             :(<Text>img</Text>)                                
                        }
                    </View>
                    <View>
                       <Text> {pet.nome}</Text>
                    </View>
                </View>
            ))
        }
        </ScrollView>
    </View>
  )
}
