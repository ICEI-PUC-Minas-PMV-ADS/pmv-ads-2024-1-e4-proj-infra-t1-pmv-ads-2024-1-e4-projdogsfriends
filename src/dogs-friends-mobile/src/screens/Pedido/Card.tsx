import { Image, Text, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"
 

export const Card = ({ pedido }) => {
  return (
    
    <View style={styles.container}>
        <Text>Pedido</Text>
        <View>
            <View style={styles.clienteInfo}>
                <Image source={{uri : pedido.cliente.fotoPerfil}} style={{ width: 100, height:100}} />
                <Text>Cliente: { pedido.cliente.nome } { pedido.cliente.sobrenome }</Text>
                <Text>{ pedido.cliente.email }</Text>
            </View>

            <View>
                {
                    pedido.pedidoPet.map(({pet}) => (
                        <View>
                           {
                            pet.imagens ? (
                              <View>
                                {
                                  pet.imagens[0].url ? 
                                 <Image source={{uri:  pet.imagens[0].url}} style={{width: 50, height: 50}} />
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

            <View style={styles.content}>
                <TouchableOpacity style={styles.btnAceitar}>
                    <Text style={styles.textAceitar}>Aceitar</Text>    
                </TouchableOpacity> 
               
                <TouchableOpacity style={styles.btnAceitar}>
                    <Text style={styles.textAceitar}>Recusar</Text>    
                </TouchableOpacity> 
            </View>
        </View>
    </View>
  )
}
