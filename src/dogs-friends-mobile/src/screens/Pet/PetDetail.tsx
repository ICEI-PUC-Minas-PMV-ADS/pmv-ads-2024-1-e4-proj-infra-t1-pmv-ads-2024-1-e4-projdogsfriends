import { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Pet } from '../../api/Pet'
import { IPet } from '../../api/interface/Pet'
import { URL_IMAGE_BASE } from '../../constants/constants'
import { useAuth } from '../../hooks/useAuth'

// {
//   "id": "433d280a-67b1-40c5-a24c-6e827d032d52",
//   "nome": "Scooby",
//   "idade": 5,
//   "peso": 5,
//   "clienteId": "6757f0de-a15e-4894-9e98-54150a741803",
//   "imagens": [
//    {
//     "id": "56d61928-70be-45a3-abbe-6d38358c5c9c",
//     "url": "http://res.cloudinary.com/dl4rbr0mo/raw/upload/v1714834257/ituhsm7bfb3o91zddsxa.png",
//     "petId": "433d280a-67b1-40c5-a24c-6e827d032d52"
//    }
//   ]
//  }


const petRepository = new Pet()

const PetDetail = () => {
  const [pet, setPet] = useState<IPet>()
  

  const getPet = async() =>{
    try {
      const res = await petRepository.getPet("433d280a-67b1-40c5-a24c-6e827d032d52")
      console.log(res)
      setPet(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(!pet){
      getPet()      
    }
  },[])

  return (
    <View>
    {
      pet ?
        (
          <View>  
            {
              pet.imagens && 
              <Image source={{uri: `${URL_IMAGE_BASE}${pet.imagens[0].url}`}} 
                style={{width: 400, height: 400}}
                />
            }           
            <Text>{ pet.nome }</Text>
            
          </View>
        )
        :
        (
          <View>
           <Text>Pet</Text>
         </View>
        )
      
    }
    </View>
  )
}

export default PetDetail