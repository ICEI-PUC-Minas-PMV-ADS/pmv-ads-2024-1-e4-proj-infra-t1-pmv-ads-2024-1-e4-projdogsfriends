import { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Pet } from "../../api/Pet";
import { IPet } from "../../api/interface/Pet";
import { URL_IMAGE_BASE } from "../../constants/constants";
import { useAuth } from "../../hooks/useAuth";

// import { Card, Title, Paragraph, Button } from "react-native-paper";
import { HeaderContainer } from "../../components/header/HeaderContainer";
import { HeaderAnimation } from "../../components/header/HeaderAnimation";
interface Props extends DrawerScreenProps<any, any>{}
import { DrawerScreenProps } from "@react-navigation/drawer";


// {
//   "id": "433d280a-67b1-40c5-a24c-6e827d032d52",
//   "nome": "Scooby",
//   "idade": 5,
//   "peso": 5,
//   "clienteId": "6757f0de-a15e-4894-9e98-54150a741803",
//   "imagens": [
//    {
//     "id": "56d61928-70be-45a3-abbe-6d38358c5c9c",
//     "url": "http://res.cloudinary.com/dl4rbr0mo/raw/upload/v1714834257/ituhsm7bfb3o91zddsxa.png",
//     "petId": "433d280a-67b1-40c5-a24c-6e827d032d52"
//    }
//   ]
//  }

const petRepository = new Pet();

const PetDetail = ({route, navigation}:Props) => {
  const [pet, setPet] = useState<IPet>();

  const getPet = async () => {
    try {
      const res = await petRepository.getPet(
        "433d280a-67b1-40c5-a24c-6e827d032d52"
      );
      const teste = await fetch("http://localhost:3000/auth/teste");
      console.log("teste:", await teste.json());
      console.log(res);
      setPet(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!pet) {
      getPet();
    }
  }, []);

  // return (
  //   <View>
  //     {pet ? (
  //       <Card>
  //         {pet.imagens && (
  //           <Card.Cover source={{ uri: `${URL_IMAGE_BASE}${pet.imagens[0].url}` }} />
  //         )}
  //         <Card.Content>
  //           <Title>{pet.nome}</Title>
  //           <Paragraph>Idade: {pet.idade}</Paragraph>
  //           <Paragraph>Peso: {pet.peso}</Paragraph>
  //         </Card.Content>
  //       </Card>
  //     ) : (
  //       <View>
  //         <Text>Carregando detalhes do pet...</Text>
  //       </View>
  //     )}
  //   </View>
  // );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
    },
    petDetails: {
      alignItems: "center",
      margin: 20,
    },
    petImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 15,
    },
    petName: {
      fontSize: 20,
      fontWeight: "bold",
    },
    petInfo: {
      fontSize: 16,
    },
    petInfoContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    petAge: {
      fontSize: 20,
      fontWeight: "bold",
    },
    observationBox: {
      borderWidth: 1,
      borderColor: "#000",
      padding: 10,
      marginTop: 10,
      width: "100%",
    },
    observationTitle: {
      fontSize: 16,
      backgroundColor: "#F5FCFF",
      marginBottom: 10,
      textAlign: "left",
    },
  });

  return (
    <View style={styles.container}>

      <HeaderAnimation route={route} navigation={navigation}>

        <View style={styles.petDetails}>
          <Image
            style={styles.petImage}
            // source={{ uri: `${URL_IMAGE_BASE}${pet.imagens[0].url}` }}
          />

          <View style={styles.petInfoContainer}>
            <Text style={styles.petName}>Nome Pet {pet}</Text>
            <Text style={styles.petAge}>{pet} anos</Text>
          </View>

          <View style={styles.petInfoContainer}>
            <Text style={styles.petInfo}>Peso: {pet} Kg</Text>
            <Text style={styles.petInfo}>ClienteId: {pet}</Text>
          </View>

          <Text style={styles.observationTitle}>Observações</Text>
          <View style={styles.observationBox}>
            <Text style={styles.petInfo}>
              {pet} Lorem, ipsum dolor sit amet consectetur adi est vero iure ut
              tempora, dolor facilis alias aperisam?
            </Text>
          </View>

        </View>

      </HeaderAnimation>

    </View>
  );
};

export default PetDetail;
