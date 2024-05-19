import { Text, View } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { GooglePlacesInput } from "../../components/google-places/GooglePlacesInput"
 

const Pesquisa = () => {
  return (
    <View>
        <Text>Pesquisa</Text>
      <GooglePlacesInput />
    </View>
  )
}

export default Pesquisa