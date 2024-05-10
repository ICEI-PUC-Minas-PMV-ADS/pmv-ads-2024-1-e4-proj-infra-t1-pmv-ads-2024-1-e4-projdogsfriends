import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens';
export const BottomNavigation = () => {
    const Tab = createBottomTabNavigator() 
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    )
}