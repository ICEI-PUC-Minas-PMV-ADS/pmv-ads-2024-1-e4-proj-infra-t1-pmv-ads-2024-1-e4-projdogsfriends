import { DrawerScreenProps } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { HeaderAnimation } from "../../components/header/HeaderAnimation";
import { Calendario } from "../../components/calendar/Calendario";
import { useEffect, useState } from "react";
import { Agenda } from "../../api/Agenda";

interface Props extends DrawerScreenProps<any, any>{}

export default function Agendamento({route, navigation}: Props){
    const [agenda, setAgenda] = useState(null);
    const [datas, setDatas] = useState([]);

    const getAgenda = async() => {
      try {
        if(!agenda){
          const response = await Agenda.getAgenda("2af28d7a-05c9-493e-953c-f099ca75b913");
          setAgenda(response)
        }    
      } catch (error) {
        console.log(error)
      }
    }

    const getData = () => {
      if(agenda){
       const dts = agenda.map(({data}) => {
        const dataSplit = data.split('/')
        return dataSplit[2] + "-" +  dataSplit[1] + "-" + dataSplit[0]
       })

       setDatas(dts)
      }
    }

    useEffect(() => {
     getAgenda()
    }, [])

     useEffect(() => {
      getData()
     },[agenda])
    console.log(agenda)
    return (
        <HeaderAnimation route={route} navigation={navigation}>
           <View>
            <Calendario datas={datas}/>
          </View>
        </HeaderAnimation>
      
    );
}

