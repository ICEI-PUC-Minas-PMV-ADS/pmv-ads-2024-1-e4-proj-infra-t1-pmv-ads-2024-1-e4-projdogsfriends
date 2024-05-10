import { createStackNavigator } from "@react-navigation/stack"
import { DrawerNavigation } from "./DrawerNavigation"

export const Navigation = () => {
  const Stack = createStackNavigator()  
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
    </Stack.Navigator>
  )
}
