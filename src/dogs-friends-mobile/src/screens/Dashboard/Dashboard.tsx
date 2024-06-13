import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { HeaderAnimation } from '../../components/header/HeaderAnimation'
import { useAuth } from '../../hooks/useAuth'
import { styles } from './styles'
import { Search } from '../../components/search/Search'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ListaPets } from './ListaPets'
import { Favoritos } from './Favoritos'
import { Cliente } from '../../api/Cliente'

interface Props extends DrawerScreenProps<any, any>{}
const clienteRepo = new Cliente()

const Dashboard = ({route, navigation}: Props) => {
  const { user, token } = useAuth()
  const [passeadores,setPasseadores] = useState([]) 

  const getPasseadores = async() => {
    try {
      const response = await clienteRepo.search(user.enderecos[0].cidade, user.enderecos[0].uf, 10,0,token)
      setPasseadores(response)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getPasseadores()
  }, [])

  const goToSearch = () => {

    
  }


 
  return (
    <HeaderAnimation route={route} navigation={navigation}>
       <TouchableOpacity style={{zIndex: 999, bottom: 30}} onPress={() => navigation.navigate("Pesquisa")}>
            <Search onPress={() => {}}/>
       </TouchableOpacity>
      <View style={styles.container}>    
        <View style={{marginTop: 20, width: "100%", alignItems: 'center'}}>
          <Image source={require("../../../assets/images/bn.png")} style={{width:400, height: 120}} resizeMode='contain'/>
        </View>  

        <Text style={{marginTop: 20, fontFamily: "semibold", fontSize: 24, color: "#707070"}}>Em {user.enderecos[0].cidade}</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginRight: 10}}
        >
            {
              passeadores.length > 0 && 
              passeadores.map((passeador, index) => (
                <TouchableOpacity key={index} onPress={() => navigation.navigate("Passeador", {passeadorId: passeador.id})} style={{marginLeft: 10}}>
                  <View>
                    {
                    passeador.fotoPerfil ? 
                    (

                    <Image source={{uri: passeador.fotoPerfil}} 
                    style={{width: 70, height: 70, borderRadius:50}} />
                
                    ): (  
                        <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"}} 
                        style={{width: 70, height: 70, borderRadius:50}} />
                      )
               }
                  </View>
                  <View>
                    <Text>{passeador.nome}</Text>
                    <Text>{passeador.enderecos[0].cidade}</Text>
                  </View>

               </TouchableOpacity>
              ))
            }
        </ScrollView> 

         <View style={{marginTop:20}}>
          <Text style={{fontFamily: "semibold", fontSize: 24, color: "#707070"}}>Pets</Text>
              <View>
                {
                  user.pets ? <ListaPets pets={user.pets}/> : <Text>Nenhum Pet cadastrado ainda?</Text>  
                  
                }
            </View>
         </View>

         <View style={{marginTop: 30}}>
         <Text style={{fontFamily: "semibold", fontSize: 24, color: "#707070"}}> Favoritos</Text>
              <View>
                {
                  user.favCliente && <Favoritos favoritos={user.favCliente}/>
                }
              </View>
         </View>

      </View>
    </HeaderAnimation>
  )
}

export default Dashboard