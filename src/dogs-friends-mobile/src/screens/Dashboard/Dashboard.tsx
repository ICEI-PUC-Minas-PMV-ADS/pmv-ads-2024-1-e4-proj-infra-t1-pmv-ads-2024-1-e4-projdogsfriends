import { DrawerScreenProps } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'
import { HeaderContainer } from '../../components/header/HeaderContainer'
import { HeaderAnimation } from '../../components/header/HeaderAnimation'

interface Props extends DrawerScreenProps<any, any>{}

const Dashboard = ({route, navigation}: Props) => {

  return (
    <HeaderAnimation route={route} navigation={navigation}>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
      <View><Text>Teste</Text></View>
    </HeaderAnimation>
  )
}

export default Dashboard