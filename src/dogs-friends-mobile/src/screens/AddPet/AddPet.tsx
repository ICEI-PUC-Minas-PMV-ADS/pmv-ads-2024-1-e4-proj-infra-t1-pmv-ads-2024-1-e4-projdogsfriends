import { useEffect, useState } from "react"
import { Alert, Text, View } from "react-native"
import { HeaderAnimation } from "../../components/header/HeaderAnimation"
import { DrawerScreenProps } from "@react-navigation/drawer"
import { AddImagem } from "./components/AddImagem"
import { AddForm } from "./components/AddForm"
import { File } from "../../api/Files"
import { Pet } from "../../api/Pet"
import { styles } from "./styles"

const fileRepo = new File()
const petRepo = new Pet()

interface Props extends DrawerScreenProps<any, any>{}

const AddPet = ({route, navigation}: Props) => {

  const [imagens, setImagens] = useState([])
  const [pet, setPet] = useState(null)

  
  const sendPet = async() => {
    const petToSend = pet 
    petToSend.clienteId = "6757f0de-a15e-4894-9e98-54150a741803"

    const imgsToSend = imagens.map(async (img) => (
      {url: await fileRepo.upload(img)}
    ))

   await Promise.all(imgsToSend).then((vecImages) => {
      console.log(vecImages)
      petToSend.imagens = vecImages
    }).catch((error)=> {
      console.log(error)
    })

    try {
      const res = await petRepo.addPet(petToSend)
      if(res.status == 201) Alert.alert("Pet cadastrado com sucesso")
      
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    if(pet) sendPet()
  },[pet])

  return (
    <HeaderAnimation route={route} navigation={navigation}>
   
     <View style={styles.container}>
          <Text style={{fontFamily: "semibold"}}>Cadastrar Pet</Text>
          <AddImagem imagens={imagens} setImagens={setImagens}/>
          <AddForm setPet={setPet}/>
     </View>
  
    </HeaderAnimation>
    )
 
}

export default AddPet