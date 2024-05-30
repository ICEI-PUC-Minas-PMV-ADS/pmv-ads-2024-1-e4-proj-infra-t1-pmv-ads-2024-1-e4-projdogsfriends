import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, ListaPedidos, Pesquisa } from '../screens';
import { DrawerNavigation } from './DrawerNavigation';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Feather } from '@expo/vector-icons';

import { Drawer } from './Drawer';
export const BottomNavigation = () => {
    const Tab = createBottomTabNavigator() 
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Dashboard" options={{tabBarIcon: ()=> <AntDesign name="home" size={24} color="black" />}} component={Drawer} />
            <Tab.Screen name="Pesquisa" options={{tabBarIcon: ()=> <AntDesign name="search1" size={24} color="black" />}} component={Pesquisa} />
            <Tab.Screen name="ListPedidos" options={{tabBarIcon: ()=> <Feather name="list" size={24} color="black" />}} component={ListaPedidos} />
        </Tab.Navigator>
    )
}