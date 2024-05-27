import { DrawerScreenProps } from '@react-navigation/drawer'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { HeaderAnimation } from '../../components/header/HeaderAnimation'
import { useAuth } from '../../hooks/useAuth'
import { styles } from './styles'
import { Search } from '../../components/search/Search'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ListaPets } from './ListaPets'
import { Favoritos } from './Favoritos'

interface Props extends DrawerScreenProps<any, any>{}

const Dashboard = ({route, navigation}: Props) => {

  const goToSearch = () => {
    
  }

  const { user } = useAuth()

  console.log(JSON.stringify(user, null, 2))
  return (
    <HeaderAnimation route={route} navigation={navigation}>
       <TouchableOpacity style={{zIndex: 999, bottom: 30}} onPress={() => navigation.navigate("Pesquisa")}>
            <Search onPress={() => {}}/>
       </TouchableOpacity>
      <View style={styles.container}>    
        <View style={{ width: "100%", alignItems: 'center'}}>
          <Image source={require("../../../assets/images/bn.png")} style={{width:200, height: 120}} resizeMode='contain'/>
        </View>   

         <View>
            <Text>Meus Pets</Text>
            <View>
              {
                user.pets ? <ListaPets pets={user.pets}/> : <Text>Nenhum Pet cadastrado ainda?</Text>  
                 
              }
            </View>
         </View>

         <View style={{marginTop: 30}}>
              <Text>Favoritos</Text>
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