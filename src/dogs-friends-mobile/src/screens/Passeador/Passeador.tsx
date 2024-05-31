import { Text, TouchableOpacity, View } from "react-native"
import { HeaderAnimation } from "../../components/header/HeaderAnimation"
import { Cliente } from "../../api/Cliente"
import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { styles } from "./styles"
import { Card } from "./Card"
import { Reviews } from "./Reviews"
import MapView from "react-native-maps"

const clienteRepo = new Cliente()

const Passeador = ({route, navigation}) => {
  const {passeadorId} = route.params  
  const {token} = useAuth()
  const [passeador, setPasseador] = useState({})
  const [latLon, setLatLon] = useState(null)

  const getLocation = async() => {
    try {
      const api = `https://us1.locationiq.com/v1/search?key=pk.2805096de05256abdc29f3de5498f645&q=${passeador.enderecos[0].numero},${passeador.enderecos[0].logradouro},${passeador.enderecos[0].cidade},${passeador.enderecos[0].uf}&format=json&`
      const local = await fetch(api)
      const res = await local.json()

      console.log(JSON.stringify(res, null, 2))
      setLatLon({lat: Number(res[0].lat), lon: Number(res[0].lon)})
    } catch (error) {
      
    }
  }



  const getPasseador = async() => {
    try{        
        const res = await clienteRepo.findClientePasseador(passeadorId, token)
        setPasseador(res);  
    }catch(error){
        console.log(error)
    }
  }

  useEffect(() => {
    if(passeadorId)
      getPasseador()
  },[passeadorId])  

  useEffect(() => {
   if(passeador.enderecos !=null && passeador.enderecos[0].cidade !== '') 
    getLocation() 
  },[passeador])


  return (
    <HeaderAnimation route={route} navigation={navigation} >
       {
        passeador &&
        <View style={styles.container}>
             <Card passeador={passeador} />

          <View style={{marginTop: 12}}>
             <Text style={{fontFamily: "semibold", fontSize: 18}}>Sobre Mim:</Text> 
             <Text numberOfLines={6} style={{fontFamily:"light", textAlign:"justify"}}>{passeador.sobreMim}</Text>
          </View>

          <View style={{marginTop: 12}}>
            <Text style={{fontFamily: "semibold", fontSize: 18}}>Reviews</Text> 
            {
              passeador.reviews && 
                <Reviews reviews={passeador.reviews}/>
            }
          </View>

       
         <TouchableOpacity style={{marginTop: 20}} onPress={
            () => navigation.navigate("Map",
              {latlon: latLon, 
                passeadorInfo:
                  {nome:passeador.nome, 
                   sobrenome: passeador.sobrenome,
                   fotoPerfil: passeador.fotoPerfil,
                   endereco: passeador.enderecos[0]}})}>
          <Text>Clique no mapa para vizualizar</Text>
             
        {
          latLon &&
            <MapView style={{width: "100%", height: 200}}
              initialRegion={{
              latitude:latLon.lat,
              longitude:latLon.lon,
              latitudeDelta: 0.5,
              longitudeDelta: 0.2
          }}
          >
           </MapView>
        }
         </TouchableOpacity>

          <View>
            <Text>Contato: </Text>
            
          </View>
        </View>
       }
    </HeaderAnimation>

  )
}
export default Passeador
