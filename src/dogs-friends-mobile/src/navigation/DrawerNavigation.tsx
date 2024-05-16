import { createDrawerNavigator } from "@react-navigation/drawer"
import { BottomNavigation } from "./BottomNavigation"
import { Home, Login, Dashboard, PetDetail, Cadastro, Pedido, ListaPedidos, AddPet } from "../screens"
 
import Telas from "../screens/telas/Telas"

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="PetDetail" component={PetDetail} />
        <Drawer.Screen name="AddPet" component={AddPet} />
        <Drawer.Screen name="Pedido" component={Pedido} />
        <Drawer.Screen name="ListaPedidos" component={ListaPedidos} />
        <Drawer.Screen name="telas" component={Telas} />
        <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
    </Drawer.Navigator>
  )
}
