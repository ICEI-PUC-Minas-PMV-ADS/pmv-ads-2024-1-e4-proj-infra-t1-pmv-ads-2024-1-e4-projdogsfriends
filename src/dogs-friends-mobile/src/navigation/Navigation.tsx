import { createStackNavigator } from "@react-navigation/stack"
import { DrawerNavigation } from "./DrawerNavigation"
import { BottomNavigation } from "./BottomNavigation"

export const Navigation = () => {
  const Stack = createStackNavigator()  
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    </Stack.Navigator>
  )
}


