import { Text, TouchableOpacity, View } from "react-native"
import { HeaderAnimation } from "../../components/header/HeaderAnimation"
import { Calendario } from "../../components/calendar/Calendario"
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Agenda } from "../../api/Agenda";

import { styles } from "./styles"

const AgendaPasseador = ({route, navigation}) => {
    const [datas, setDatas] = useState([]);
    const [horario, setHorario] = useState("")
    const [dataSel, setDataSel] = useState("")
    const [agenda, setAgenda] = useState(null);
    const { user } = useAuth()

    const getAgenda = async() => {
        try {
            console.log(user.id)
            const response = await Agenda.getAgenda(user.id);
            
            setAgenda(response)
   
        } catch (error) {
          console.log(error)
        }
      }

      const addAgenda = async() => {
        const vecdata = dataSel.split("-")
        const dados: any = {}
        dados.data = (vecdata[2]+ "/" + vecdata[1] + "/" + vecdata[0])
        dados.hora = "08h00"
        dados.passeadorId = user.id
        try {
          const response = await Agenda.addAgenda(dados)  
          if(response.status == 201){
            getAgenda()
        }
        } catch (error) {
            
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
        getData()
       },[agenda])

    console.log(agenda)  
   
    useEffect(() => {
        getAgenda()
    },[])  

  return (
    <HeaderAnimation route={route} navigation={navigation}>
       <View style={{padding:10}}>
       <View style={styles.content}>
        <Text style={{padding:20 , fontFamily: "semibold", fontSize: 24, color: "#262626"}}>Agenda</Text>
          <View>
             <Calendario datas={datas} setDataSel={setDataSel} all_days={false}/>            
           </View>

           <View style={{width: "100%", marginTop: 20}}>
            <TouchableOpacity style={styles.btnConfirmar} onPress={() => addAgenda()}>
              <Text style={{fontFamily: "semibold", color: "#FFFFFF"}}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
       </View>
    </HeaderAnimation>
  )
}

export default AgendaPasseador