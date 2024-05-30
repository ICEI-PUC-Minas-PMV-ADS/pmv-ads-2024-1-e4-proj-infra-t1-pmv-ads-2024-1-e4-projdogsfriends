import { Image, Text, View } from "react-native"
import { styles } from "./styles"
import { Stars } from "../../components/stars/stars"
import { TouchableOpacity } from "react-native-gesture-handler"
import { ButtonFavorite } from "../../components/Favorito/ButtonFavorite"
import { useNavigation } from "@react-navigation/native"

export const Card = ({passeador}) => {
  const navigate = useNavigation()

  return (
    <View style={styles.content}>
       <View style={styles.card}>

        <View>
                {
                    passeador.fotoPerfil ?
                    (  <Image source={{uri: passeador.fotoPerfil}} style={{width:120, height: 120, borderRadius: 5}} /> )
                    : (<Image source={{uri: passeador.fotoPerfil}} style={{width:120, height: 120, borderRadius: 5}} /> )
                }           
            </View>
            <View>
                <Text style={{fontFamily: "bold", fontSize: 16}}>{ passeador.nome } {passeador.sobrenome}</Text>
                {
                    passeador.enderecos && <Text style={{fontFamily: "semibold", fontSize: 12, color: "#103C31"}}>{ passeador.enderecos[0].cidade }</Text>
                }
            <View style={{marginTop:10}}>

              <View style={{flexDirection: "row", marginBottom: 5}}> 
                <Stars number={1} /> 
                <Text>5</Text>
              </View>   

            <View style={{flexDirection: "row", gap:10}}>
                <TouchableOpacity style={styles.btnContratar} onPress={() => navigate.navigate("Agendamento", {passeadorId: passeador.id, passeador:passeador})}>
                    <Text style={styles.textBtnContratar}>Contratar {passeador.nome}</Text>
                </TouchableOpacity>

                <ButtonFavorite passeadorId={passeador.id}/>
            </View>
            </View>
            </View>

          

       </View>

    </View>
  )
}
