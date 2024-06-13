import { Image, Text, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"
 

export const Card = ({ pedido }) => {
  return (
    
    <View style={styles.container}>
        <Text style={{fontFamily: "bold", color: "#757575"}}>Pedido</Text>
        <View style={{paddingHorizontal: 20}}>
            <View style={styles.clienteInfo}>
                <Image source={{uri : pedido.cliente.fotoPerfil}} style={{ width: 100, height:100, borderRadius:4}} />
                <Text>Cliente: { pedido.cliente.nome } { pedido.cliente.sobrenome }</Text>
                <Text>{ pedido.cliente.email }</Text>
            </View>

            <View style={{flexDirection: "row", width: "100%", justifyContent: "center", alignItems:"center", marginTop: 20}}>
                {
                    pedido.pedidoPet.map(({pet}) => (
                        <View >
                           {
                            pet.imagens ? (
                              <View style={{}}>
                                {
                                  pet.imagens[0].url ? 
                                 <Image source={{uri:  pet.imagens[0].url}} style={{width: 50, height: 50, borderRadius:25}} />
                                   : (
                                    <Image source={require("../../../assets/images/imgperfil.png")} 
                                    style={{width: 50, height: 50, borderRadius:25}} />
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
            
            <View>
                <Text>data: {pedido.agendaPasseador.data}</Text>
                <Text>Cidade: { pedido.cliente.enderecos[0].cidade }</Text>
                <Text>Bairro: { pedido.cliente.enderecos[0].bairro }</Text>
                <Text>Logradouro: { pedido.cliente.enderecos[0].logradouro }</Text>
                <Text>Número: { pedido.cliente.enderecos[0].numero }</Text>
            </View>

            <View style={styles.content}>
                <TouchableOpacity style={styles.btnAceitar}>
                    <Text style={styles.textAceitar}>Aceitar</Text>    
                </TouchableOpacity> 
               
                <TouchableOpacity style={styles.btnRecusar}>
                    <Text style={styles.textRecusar}>Recusar</Text>    
                </TouchableOpacity> 
            </View>
        </View>
    </View>
  )
}
