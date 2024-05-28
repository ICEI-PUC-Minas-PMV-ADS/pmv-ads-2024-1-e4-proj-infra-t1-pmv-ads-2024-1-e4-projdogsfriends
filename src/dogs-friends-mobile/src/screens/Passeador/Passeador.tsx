import { Text, View } from "react-native"
import { HeaderAnimation } from "../../components/header/HeaderAnimation"
import { Cliente } from "../../api/Cliente"
import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { styles } from "./styles"
import { Card } from "./Card"

const clienteRepo = new Cliente()

const Passeador = ({route, navigation}) => {
  const {passeadorId} = route.params  
  const {token} = useAuth()
  const [passeador, setPasseador] = useState({})

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
  },[])  

  return (
    <HeaderAnimation route={route} navigation={navigation} >
       {
        passeador &&
        <View style={styles.container}>
             <Card passeador={passeador} />
        </View>
       }
    </HeaderAnimation>

  )
}
export default Passeador

//    LOG  {
//     "id": "2af28d7a-05c9-493e-953c-f099ca75b913",
//     "nome": "Leticia",
//     "sobrenome": "dos Santos",
//     "sobreMim": null,
//     "fotoPerfil": "https://images.unsplash.com/photo-1587143185708-674ef4a1c09b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "enderecos": [
//       {
//         "uf": "MG",
//         "cidade": "Belo Horizonte",
//         "bairro": "Lourdes",
//         "logradouro": "Av. Álvares Cabral"
//       },
//       {
//         "uf": "SP",
//         "cidade": "São Paulo",
//         "bairro": "Tatuapé",
//         "logradouro": "Avenida Azevedo"
//       }
//     ],
//     "reviews": [
//       {
//         "nota": 4,
//         "comentario": "Meus filhotes voltaram felizes e relaxados. Totalmente recomendado!!!",
//         "createdAt": "2024-04-20T15:51:54.162Z",
//         "nomeCliente": "Pedro",
//         "fotoCliente": "https://images.unsplash.com/photo-1532469060546-4eb37b460481?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       },
//       {
//         "nota": 5,
//         "comentario": "Super responsivo, enviou atualizações regulares e cuidou muito bem do meu doce cachorrinho! Será 100% remarcado no futuro!",
//         "createdAt": "2024-04-18T16:05:16.380Z",
//         "nomeCliente": "Pedro",
//         "fotoCliente": "https://images.unsplash.com/photo-1532469060546-4eb37b460481?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       },
//       {
//         "nota": 5,
//         "comentario": "Otimo! Gostei muito!!!",
//         "createdAt": "2024-04-20T18:35:53.760Z",
//         "nomeCliente": "Amanda",
//         "fotoCliente": "https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       },
//       {
//         "nota": 4,
//         "comentario": "Ela cuidou do meu cachorro, um Labrador de cinco anos, muitas vezes. Ela é responsável e claramente tem um amor genuíno pelos animais...",
//         "createdAt": "2024-04-20T18:37:20.274Z",
//         "nomeCliente": "Amanda",
//         "fotoCliente": "https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       },
//       {
//         "nota": 5,
//         "comentario": "Otimo tudo certo!",
//         "createdAt": "2024-05-09T01:24:41.798Z",
//         "nomeCliente": "Pedro",
//         "fotoCliente": "https://images.unsplash.com/photo-1532469060546-4eb37b460481?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       }
//     ]
//   }
  