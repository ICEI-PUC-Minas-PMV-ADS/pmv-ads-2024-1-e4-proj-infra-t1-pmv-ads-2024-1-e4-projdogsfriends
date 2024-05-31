import { Text, View } from "react-native"
import { Cliente } from "../../api/Cliente";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { HeaderAnimation } from "../../components/header/HeaderAnimation";
const clienteRepo = new Cliente()


const Pedido = ({route, navigation}) => {
  const [pedido, setPedido] = useState()
  const { pedidoId } = route.params;

  const getPedido = async() => {
    try {
      const res = await clienteRepo.getPedido(pedidoId)
      setPedido(res)
      console.log(JSON.stringify(res, null, 2))
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if(pedidoId){
      getPedido()
    }
  },[])

  return (
    <HeaderAnimation route={route} navigation={navigation}>
      <View>
        {
          pedido ? (
            <Card pedido={pedido}/>
          ) : (
            <Text>Pedido nao encontrado</Text>
          )
        }
      </View>
    </HeaderAnimation>
  )
}

export default Pedido


// {
//   "id": "023479b8-f170-4db5-81c4-4d4de61809cd",
//   "agendaPasseador": {
//     "id": "9c87e5d2-2bd0-47e7-8a18-41c4411c783b",
//     "data": "13/05/2024",
//     "hora": "08h00",
//     "ativo": true,
//     "passeadorId": "2af28d7a-05c9-493e-953c-f099ca75b913"
//   },
//   "precoTotal": 80,
//   "cliente": {
//     "id": "6757f0de-a15e-4894-9e98-54150a741803",
//     "nome": "Pedro",
//     "sobrenome": "Henrique Souza",
//     "email": "mail3@gmail.com",
//     "fotoPerfil": "https://images.unsplash.com/photo-1532469060546-4eb37b460481?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   "passeador": {
//     "id": "2af28d7a-05c9-493e-953c-f099ca75b913",
//     "nome": "Leticia",
//     "sobrenome": "dos Santos",
//     "fotoPerfil": "https://images.unsplash.com/photo-1587143185708-674ef4a1c09b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   "pedidoPet": [
//     {
//       "pet": {
//         "id": "ac67f7a8-fb70-493a-97dd-4ed6d2e5755c",
//         "nome": "Pipoca",
//         "raca": "vira lata",
//         "idade": 4,
//         "imagens": [
//           {
//             "url": "http://res.cloudinary.com/dl4rbr0mo/raw/upload/v1714834295/dn4v5zhn0g2wnbyelfgb.png"
//           }
//         ]
//       }
//     },
//     {
//       "pet": {
//         "id": "433d280a-67b1-40c5-a24c-6e827d032d52",
//         "nome": "Scooby",
//         "raca": "vira lata",
//         "idade": 5,
//         "imagens": [
//           {
//             "url": "2e6f8bac-9920-439d-96ee-253e7e8f5e4e.jpeg"
//           }
//         ]
//       }
//     }
//   ],
//   "passeio": {
//     "id": "0ebec0cf-fd77-4bc0-bf08-19d76a31c631",
//     "realizado": true,
//     "pedidoId": "023479b8-f170-4db5-81c4-4d4de61809cd"
//   }
// }