import { createStackNavigator } from "@react-navigation/stack"
import { Cadastro, Home, Login } from "../screens"

const Stack = createStackNavigator()
export const AuthNavigation = () => {

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    )
}