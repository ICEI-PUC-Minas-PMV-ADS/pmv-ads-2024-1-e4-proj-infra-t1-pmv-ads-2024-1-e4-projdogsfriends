import { Text, View, Image, Alert } from "react-native"
import { HeaderAnimation } from "../../components/header/HeaderAnimation"
import { useAuth } from "../../hooks/useAuth"
import { styles } from "./styles"
import { URL_IMAGE_BASE } from "../../constants/constants"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Cliente } from "../../api/Cliente"

const clientRepo = new Cliente()

const Confirmar = ({route, navigation}) => {
  const { agenda, passeador } = route.params
  const {user} = useAuth()
  
  const createPedido = async() => {     
   const res =  await clientRepo.createPedido(70, agenda.id, user.id,passeador.id, [user.pets[0].id])
    
   if(res.status === 201){
      Alert.alert("Pedido feito com sucesso")
      navigation.navigate("ListaPedidos")
   }
  }
  
  return (
    <HeaderAnimation route={route} navigation={navigation}>
        <View style={styles.container}>
            <Text>Confirmar</Text>

            <View>

                <View>

                  <Text>{ passeador.nome } { passeador.sobrenome }</Text>

                </View>

                <View>
                  <Text>Endereço do Pet</Text>
                  <Text>{ user.enderecos[0].logradouro }</Text>
                  <Text>{ user.enderecos[0].cidade }</Text>
                </View>

                <View>
                <View style={{flexDirection: "row", width: "100%", justifyContent: "center", alignItems:"center", marginTop: 20}}>
                {
                    user.pets.map((pet) => (
                        <View >
                           {
                            pet.imagens ? (
                              <View style={{}}>
                                {
                                  pet.imagens[0].url ? 
                                 <Image source={{uri: `${URL_IMAGE_BASE}${pet.imagens[0].url}`}} style={{width: 50, height: 50, borderRadius:25}} />
                                   : (
                                        <Text>Imagem</Text>
                                    )
                                   
                                }
                              </View>  
                            ) : (
                                <Text>Imagem</Text>
                            )
                           }
                           <Text>{ pet.nome }</Text>
                        </View>
                    ))
                }
            </View>
           </View>

           <View style={{width: "100%", marginTop: 20}}>
              <TouchableOpacity style={styles.btnConfirmar}  onPress={() => createPedido()}>
              <Text style={{fontFamily: "semibold", color: "#FFFFFF"}}>Confirmar</Text>
              </TouchableOpacity>
            </View>
            </View>
        </View>     
    </HeaderAnimation>

  )
}

export default Confirmar