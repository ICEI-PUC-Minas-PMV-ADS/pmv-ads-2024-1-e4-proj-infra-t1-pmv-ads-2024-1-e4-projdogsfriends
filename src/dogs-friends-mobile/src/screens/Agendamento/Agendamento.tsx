import { DrawerScreenProps } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { HeaderAnimation } from "../../components/header/HeaderAnimation";
import { Calendario } from "../../components/calendar/Calendario";
import { useEffect, useState } from "react";
import { Agenda } from "../../api/Agenda";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

interface Props extends DrawerScreenProps<any, any>{}

export default function Agendamento({route, navigation}: Props){
  
  const {passeadorId, passeador} = route.params
  const [agenda, setAgenda] = useState(null);
  const [datas, setDatas] = useState([]);
  const [horario, setHorario] = useState("")
  const [dataSel, setDataSel] = useState("")

  const horarios = ["08h:00","09h:00","10h:00","10h:30", "12h:00"]

    const getAgenda = async() => {
      try {
       
          const response = await Agenda.getAgenda(passeadorId);
          setAgenda(response)
 
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
    }, [passeadorId])

     useEffect(() => {
      getData()
     },[agenda])

     console.log(agenda)
    const nextPage = () => {

      const dts = dataSel.split("-")
      console.log(dts) 

      const ag = agenda.find(d => d.data === dts[2]+"/"+dts[1]+"/"+dts[0])
      
      navigation.navigate("Confirmar", {agenda: ag, passeador:passeador})
    }
    
    return (
        <HeaderAnimation route={route} navigation={navigation}>
           <View>
           {
            <Calendario datas={datas} setDataSel={setDataSel}/>
           }
          </View>
          <View>
            <ScrollView style={{   }}
            showsHorizontalScrollIndicator={ false }
              horizontal>
                 {
                  horarios.map((h, index) => (
                    <TouchableOpacity key={index} onPress={() => setHorario(h)}
                    style={{
                        paddingHorizontal: 14,                        
                        paddingVertical: 10,
                        backgroundColor: "#1E5FC9",
                        marginLeft: 10,
                        borderRadius: 7
                        }}>
                      <Text> { h } </Text>
                   </TouchableOpacity>
                  ))
                 }
              </ScrollView>
          </View>

          <View style={{width: "100%", marginTop: 20}}>
            <TouchableOpacity style={styles.btnConfirmar} onPress={() => nextPage()}>
              <Text style={{fontFamily: "semibold", color: "#FFFFFF"}}>Confirmar</Text>
            </TouchableOpacity>
          </View>

        </HeaderAnimation>
      
    );
}

