import { createDrawerNavigator } from "@react-navigation/drawer"
import { BottomNavigation } from "./BottomNavigation"
import { Home, Login, Dashboard, PetDetail, Cadastro, Pedido, ListaPedidos, AddPet, Pesquisa, Map, Agendamento, Passeador } from "../screens"
 
import Telas from "../screens/telas/Telas"

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator screenOptions={{headerShown:false, drawerStyle:{
      backgroundColor: "#FFFFFF"
    }}}>       
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="PetDetail" component={PetDetail} />
        <Drawer.Screen name="Passeador" component={Passeador} />
        <Drawer.Screen name="AddPet" component={AddPet} />
        <Drawer.Screen name="Pedido" component={Pedido} />
        <Drawer.Screen name="ListaPedidos" component={ListaPedidos} />
        <Drawer.Screen name="Pesquisa" component={Pesquisa} />
        <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="Agendamento" component={Agendamento} />
        <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
    </Drawer.Navigator>
  )
}
