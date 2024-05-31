import { useState } from "react"
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Text, View, SafeAreaView, StyleSheet, 
    TouchableWithoutFeedback, Keyboard, TextInput, FlatList, 
    Pressable} from 'react-native'
import { Location } from "./Location"

export const Search = ({ onPress }) => {
    const [input, setInput] = useState<string>()
    const [data, setData] = useState<Location[]>([])

    const onChangeText = async (text: string) => {
        setInput(text)
        if(text.length > 2){
            let apiurl = `https://us1.locationiq.com/v1/autocomplete?key=pk.2805096de05256abdc29f3de5498f645&q=${input}&accept-language=pt-BR&countrycodes=br&limit=5`
            const res = await fetch(apiurl)
            
            if(res){
              const data:Location[] = await res.json()
              if(data.length > 0) setData(data) 
                else setData([])
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
                data.map((item, index) => (
                    <Pressable key={index} onPress={() => execSearch(item.address.city || item.address.name, item.address.state)} style={{borderBottomWidth:0.2, borderBottomColor: "#999999", borderStyle:"dashed"}}>
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
