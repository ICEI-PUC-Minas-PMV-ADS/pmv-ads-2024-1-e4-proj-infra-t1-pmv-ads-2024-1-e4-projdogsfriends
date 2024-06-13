import { DrawerScreenProps } from "@react-navigation/drawer"
import { Text, View } from "react-native"
import { HeaderAnimation } from "../../components/header/HeaderAnimation"
import { Cliente } from "../../api/Cliente"
import { useEffect, useState } from "react"
import { Card } from "./Card"
import { styles } from "./styles"
import { useAuth } from "../../hooks/useAuth"

interface Props extends DrawerScreenProps<any, any>{}
const clienteRepo = new Cliente()

const ListaPedidos = ({route, navigation}:Props) => {
  const {user} = useAuth()
  const [listaPedidos, setListaPedidos] = useState([])

  useEffect(() => {
    (async () => {
      if(listaPedidos.length === 0){
        try {
          const res = await clienteRepo.getPedidos(user.id)
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
          <View style={{gap:10}}>
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