import { createStackNavigator } from "@react-navigation/stack"
import { DrawerNavigation } from "./DrawerNavigation"
import { BottomNavigation } from "./BottomNavigation"

export const Drawer = () => {
  const Stack = createStackNavigator()  
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  )
}


