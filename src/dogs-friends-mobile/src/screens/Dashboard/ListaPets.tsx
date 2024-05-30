import { Image, Text, TouchableOpacity, View } from "react-native"
import { URL_IMAGE_BASE } from "../../constants/constants"
import { ScrollView } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

export const ListaPets = ({pets}) => {
  const navigation = useNavigation()  
  console.log(JSON.stringify(pets, null, 2))
  return (
    <View>
        <ScrollView
            horizontal

           
            >
        {
            pets.map((pet) => (
                <TouchableOpacity onPress={() => navigation.navigate("PetDetail", {petId: pet.id})}
                     key={pet.id}  style={{marginRight:10}}>
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
                </TouchableOpacity>
            ))
        }
        </ScrollView>
    </View>
  )
}
