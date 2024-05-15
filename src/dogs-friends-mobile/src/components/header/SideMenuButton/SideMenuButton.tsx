import { DrawerScreenProps } from "@react-navigation/drawer"
import { View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerActions } from "@react-navigation/native"

interface Props extends DrawerScreenProps<any, any>{}

export const SideMenuButton = ({navigation}: Props) => {
 
  return (
    <View>
      <Ionicons 
        name="menu-outline"
        size={24} 
        color="#FFF" 
        onPress={ ()=> navigation.dispatch(DrawerActions.toggleDrawer())}/>
        
    </View>
  )
}
