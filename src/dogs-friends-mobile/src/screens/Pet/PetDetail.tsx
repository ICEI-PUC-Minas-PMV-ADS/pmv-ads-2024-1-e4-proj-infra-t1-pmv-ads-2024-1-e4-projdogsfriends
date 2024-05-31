import { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, Dimensions } from "react-native";
import { Pet } from "../../api/Pet";
import { IPet } from "../../api/interface/Pet";
import { URL_IMAGE_BASE } from "../../constants/constants";
import { useAuth } from "../../hooks/useAuth";

// import { Card, Title, Paragraph, Button } from "react-native-paper";
import { HeaderContainer } from "../../components/header/HeaderContainer";
import { HeaderAnimation } from "../../components/header/HeaderAnimation";
interface Props extends DrawerScreenProps<any, any>{}
import { DrawerScreenProps } from "@react-navigation/drawer";


const petRepository = new Pet();
const height = Dimensions.get("window").height

const PetDetail = ({route, navigation}:Props) => {
  
  const [pet, setPet] = useState<IPet>();
  const { petId } = route.params

  const getPet = async () => {
    try {
      const res = await petRepository.getPet(petId);
      console.log(JSON.stringify(res, null, 2))
      setPet(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   
      getPet();
   
  }, [petId]);

  return (
    

      <HeaderAnimation route={route} navigation={navigation}>
         
         {
          pet && 
          <View style={{bottom: 40, height: height-100 }}>

          <View>
            {
              pet.imagens ?
                <Image source={{uri:`${URL_IMAGE_BASE}${pet.imagens[0].url}`}} 
                  style={{width: "100%", height: 250 }}/>
                  : <Text>img</Text>
            }
          </View>

          <View style={{
              marginTop: 20, 
              marginHorizontal: 20, 
              borderRadius: 10, 
               }}>
            <View>
                <Text style={{ fontFamily: "bold", fontSize: 32}}>{ pet.nome }</Text>
            </View>

         
            <View style={{flexDirection: "row"}}>
              <Text>Idade: </Text>
              <Text>{ pet.idade } anos</Text>
            </View>

            <View style={{flexDirection: "row"}}>
              <Text>Raça: </Text>
              <Text>{ pet.raca }</Text>
            </View>

            <View style={{flexDirection: "row"}}>
              <Text>Peso: </Text>
              <Text>{ pet.peso } Quilos</Text>
            </View>

          </View>

          {/* <View style={{marginTop: 20}}>
               {
                pet.imagens !== undefined && pet.imagens.length > 0 &&
                (
                  <Image source={{uri:`${URL_IMAGE_BASE}${pet.imagens[0].url}`}} 
                   style={{width: 120, height: 120 }}/>
                )
               }
          </View> */}

        </View>
         }
      </HeaderAnimation>

 
  );
};

export default PetDetail;
