import { DrawerScreenProps } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { HeaderAnimation } from "../../components/header/HeaderAnimation";
import { Calendario } from "../../components/calendar/Calendario";

interface Props extends DrawerScreenProps<any, any>{}

export default function Agendamento({route, navigation}: Props){
    return (
        <HeaderAnimation route={route} navigation={navigation}>
           <View>
            <Calendario />
          </View>
        </HeaderAnimation>
      
    );
}