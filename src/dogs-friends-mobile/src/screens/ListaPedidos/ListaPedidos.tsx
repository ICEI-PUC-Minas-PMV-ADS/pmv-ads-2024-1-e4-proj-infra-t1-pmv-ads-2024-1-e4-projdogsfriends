import { DrawerScreenProps } from "@react-navigation/drawer"
import { Text, View } from "react-native"
import { HeaderAnimation } from "../../components/header/HeaderAnimation"
import { Cliente } from "../../api/Cliente"
import { useEffect, useState } from "react"
import { Card } from "./Card"
import { styles } from "./styles"

interface Props extends DrawerScreenProps<any, any>{}
const clienteRepo = new Cliente()

const ListaPedidos = ({route, navigation}:Props) => {
  const [listaPedidos, setListaPedidos] = useState([])

  useEffect(() => {
    (async () => {
      if(listaPedidos.length === 0){
        try {
          const res = await clienteRepo.getPedidos("6757f0de-a15e-4894-9e98-54150a741803")
          setListaPedidos(res)
        } catch (error) {
          
        }
      }
    }
    )()
  },[])

  return (
    <HeaderAnimation route={route} navigation={navigation}>
       <View style={styles.container}>
          <Text style={{ fontFamily: "bold", fontSize: 32, color: "#515151"}}>Lista de Pedidos</Text>
          <View>
             {
              listaPedidos.map((pedido) => (
                <Card key={pedido.id} pedido={pedido} />
              ))
            }
          </View>
       </View>
   </HeaderAnimation>
  )
}

export default ListaPedidos