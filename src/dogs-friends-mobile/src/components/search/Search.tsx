import { useState } from "react"
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Text, View, SafeAreaView, StyleSheet, 
    TouchableWithoutFeedback, Keyboard, TextInput, FlatList, 
    Pressable} from 'react-native'
import { Location } from "./Location"

export const Search = ({ onPress }) => {
    const [input, setInput] = useState<string>()
    const [data, setData] = useState<Location[]>([])

    const moke:Location[] = [
        {
          "place_id": "322888326560",
          "osm_id": "368782",
          "osm_type": "relation",
          "licence": "https://locationiq.com/attribution",
          "lat": "-19.9227318",
          "lon": "-43.9450948",
          "boundingbox": [
            "-20.0594646",
            "-19.7765437",
            "-44.0632916",
            "-43.8572199"
          ],
          "class": "place",
          "type": "municipality",
          "display_name": "Belo Horizonte, Região Metropolitana de Belo Horizonte, Minas Gerais, Brasil",
          "display_place": "Belo Horizonte",
          "display_address": "Região Metropolitana de Belo Horizonte, Minas Gerais, Brasil",
          "address": {
            "name": "Belo Horizonte",
            "county": "Região Metropolitana de Belo Horizonte",
            "state": "Minas Gerais",
            "country": "Brasil",
            "country_code": "br"
          }
        },
        {
          "place_id": "322602225164",
          "osm_id": "3409014",
          "osm_type": "relation",
          "licence": "https://locationiq.com/attribution",
          "lat": "-19.8269817",
          "lon": "-44.01314461",
          "boundingbox": [
            "-19.8282148",
            "-19.8258286",
            "-44.0135606",
            "-44.0124294"
          ],
          "class": "place",
          "type": "neighbourhood",
          "display_name": "Vila Bispo de Maura (Belo Horizonte), Pampulha, Belo Horizonte, Região Metropolitana de Belo Horizonte, Minas Gerais, Brasil",
          "display_place": "Vila Bispo de Maura (Belo Horizonte)",
          "display_address": "Pampulha, Belo Horizonte, Região Metropolitana de Belo Horizonte, Minas Gerais, Brasil",
          "address": {
            "name": "Vila Bispo de Maura (Belo Horizonte)",
            "suburb": "Pampulha",
            "city": "Belo Horizonte",
            "county": "Região Metropolitana de Belo Horizonte",
            "state": "Minas Gerais",
            "country": "Brasil",
            "country_code": "br"
          }
        },
        {
          "place_id": "323972630323",
          "osm_id": "355767153",
          "osm_type": "node",
          "licence": "https://locationiq.com/attribution",
          "lat": "-19.9101408",
          "lon": "-43.917867",
          "boundingbox": [
            "-19.9201408",
            "-19.9001408",
            "-43.927867",
            "-43.907867"
          ],
          "class": "place",
          "type": "neighbourhood",
          "display_name": "Horto, Horto, Belo Horizonte, Região Metropolitana de Belo Horizonte, Minas Gerais, 31015-065, Brasil",
          "display_place": "Horto",
          "display_address": "Belo Horizonte, Região Metropolitana de Belo Horizonte, Minas Gerais, 31015-065, Brasil",
          "address": {
            "name": "Horto",
            "suburb": "Horto",
            "city": "Belo Horizonte",
            "county": "Região Metropolitana de Belo Horizonte",
            "state": "Minas Gerais",
            "postcode": "31015-065",
            "country": "Brasil",
            "country_code": "br"
          }
        },
        {
          "place_id": "324039431052",
          "osm_id": "3408818",
          "osm_type": "relation",
          "licence": "https://locationiq.com/attribution",
          "lat": "-19.9096053",
          "lon": "-43.91750977",
          "boundingbox": [
            "-19.9130453",
            "-19.9061091",
            "-43.9233235",
            "-43.9090361"
          ],
          "class": "boundary",
          "type": "administrative",
          "display_name": "Horto, Belo Horizonte, Região Metropolitana de Belo Horizonte, Minas Gerais, Brasil",
          "display_place": "Horto",
          "display_address": "Belo Horizonte, Região Metropolitana de Belo Horizonte, Minas Gerais, Brasil",
          "address": {
            "name": "Horto",
            "city": "Belo Horizonte",
            "county": "Região Metropolitana de Belo Horizonte",
            "state": "Minas Gerais",
            "country": "Brasil",
            "country_code": "br"
          }
        },
        {
          "place_id": "321366459388",
          "osm_id": "12907550",
          "osm_type": "relation",
          "licence": "https://locationiq.com/attribution",
          "lat": "-19.8179975",
          "lon": "-44.00693854",
          "boundingbox": [
            "-20.405011",
            "-19.2320794",
            "-44.542",
            "-43.4791341"
          ],
          "class": "boundary",
          "type": "administrative",
          "display_name": "Região Geográfica Imediata de Belo Horizonte, Região Metropolitana de Belo Horizonte, Minas Gerais, Brasil",
          "display_place": "Região Geográfica Imediata de Belo Horizonte",
          "display_address": "Região Metropolitana de Belo Horizonte, Minas Gerais, Brasil",
          "address": {
            "name": "Região Geográfica Imediata de Belo Horizonte",
            "county": "Região Metropolitana de Belo Horizonte",
            "state": "Minas Gerais",
            "country": "Brasil",
            "country_code": "br"
          }
        }
      ];

    const onChangeText = async (text: string) => {
        setInput(text)
        if(text.length > 3){
           // let apiurl = `https://us1.locationiq.com/v1/autocomplete?key=pk.2805096de05256abdc29f3de5498f645&q=${input}&accept-language=pt-BR&countrycodes=br&limit=5`
           // const res = await fetch(apiurl)
            
            if(moke){
              //const data:Location[] = await res.json()
              if(moke.length > 0) setData(moke)
            }
        }
    }

    const getItemText = (item: Location) => {
        let mainText = item.address.name;
        if(item.type === "city" && item.address.state)
            mainText += ", " + item.address.state

        return (
            <View style={{flexDirection: "row", alignItems: "center", padding:15}}>
                <EvilIcons name="location" size={24} color="black" />

                <View style={{marginLeft: 10, flexShrink:1}}>
                    <Text style={{fontFamily: "semibold"}}>{ mainText }</Text>
                    <Text style={{fontSize: 12}}>{ item.address.state }</Text>
                </View>
            </View>

        )
    }

    const execSearch = async(city: string, state: string) => {
        await onPress(city, state);
        setData([])
    }

  return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
         <SafeAreaView>
           
            <TextInput 
                placeholder="Pesquisar em uma cidade..."
                value={input}
                onChangeText={onChangeText}
                style={{
                    height: 50,
                    marginHorizontal: 12,
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    borderColor: "#FFFFFF",
                    color: "#EAE9E9",
                    fontFamily: "semibold"
                }}
                />
           <View 
                style={{backgroundColor: '#FFFFFF', position:"absolute", zIndex:10,
                        alignSelf:"center" , top: 56, width:"94%", borderRadius:5}}>
           
            {
                data.map((item) => (
                    <Pressable key={item.osm_id} onPress={() => execSearch(item.address.city || item.address.name, item.address.state)} style={{borderBottomWidth:0.2, borderBottomColor: "#999999", borderStyle:"dashed"}}>
                        {getItemText(item)}
                    </Pressable>
                ))
            }    
           
           
            {/* <FlatList 
                    style={{}}
                    data={data}
                    renderItem={({item, index}) => (
                        <Pressable onPress={() => execSearch(item.address.city || item.address.name, item.address.state)} style={{borderBottomWidth:0.2, borderBottomColor: "#999999", borderStyle:"dashed"}}>
                            {getItemText(item)}
                        </Pressable>
                    )}
                    keyExtractor={item => item.osm_id}
                /> */}
           </View>
        </SafeAreaView>
     </TouchableWithoutFeedback>

  )
}
