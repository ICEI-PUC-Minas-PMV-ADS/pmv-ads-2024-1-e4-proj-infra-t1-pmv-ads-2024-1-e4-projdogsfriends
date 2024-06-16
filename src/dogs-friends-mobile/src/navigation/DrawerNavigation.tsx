import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from "@react-navigation/drawer"
 
import { Home, Login, Dashboard, PetDetail, Cadastro, Pedido, ListaPedidos, AddPet, Pesquisa, Map, Agendamento, Passeador, Confirmar, AgendaPasseador, Config } from "../screens"
 
import Telas from "../screens/telas/Telas"
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useAuth } from "../hooks/useAuth"
import { useNavigation } from "@react-navigation/native"
import { URL_IMAGE_BASE } from "../constants/constants"

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}
    screenOptions={{headerShown:false, drawerStyle:{
      backgroundColor: "#FFFFFF"
    }}}>       
        
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="PetDetail" component={PetDetail} />
        <Drawer.Screen name="Passeador" component={Passeador} />
        <Drawer.Screen name="AddPet" component={AddPet} />
        <Drawer.Screen name="Pedido" component={Pedido} />
        <Drawer.Screen name="ListaPedidos" component={ListaPedidos} />
        <Drawer.Screen name="Pesquisa" component={Pesquisa} />
        <Drawer.Screen name="Confirmar" component={Confirmar} />
        <Drawer.Screen name="Agenda" component={AgendaPasseador} />
        <Drawer.Screen name="Config" component={Config} />

          <Drawer.Group >
             <Drawer.Screen name="Map" component={Map} />
          </Drawer.Group>


        <Drawer.Screen name="Agendamento" component={Agendamento} />
   
    </Drawer.Navigator>
  )
}


const Menu = ( props: DrawerContentComponentProps) => {
  const { user, token, setToken, setUser, logout } = useAuth();
 // const authController = new Auth();
  const navigation = useNavigation();

  // const logout = async() => {
  //   setToken(null);
  //   await authController.removeToken();
  //   setUser(null)
  // }

  return(
   <DrawerContentScrollView>
      <View>
     
       <View style={styles.content}>
       {/* <ImageBackground 
        source={require('../assets/images/doctor.jpg')}
        style={{width: "100%", height: "100%", position: "absolute", zIndex:1, opacity: 0.4}}
        resizeMode="cover"
        /> */}
        <View style={styles.profileImgContainer}>
           {
            user.fotoPerfil ?
              <Image 
                source={{uri: `${URL_IMAGE_BASE}${user.fotoPerfil}`}}
                style={styles.profileImg} 
              />   
              :
              <Image 
              source={require("../../assets/images/imgperfil.png")}
              style={styles.profileImg} 
          />   
           }        
        </View>
        <Text style={styles.userName}>Olá {user.nome}</Text>
      </View> 
      
      <View>
      <TouchableOpacity style={styles.ItemMenu} onPress={() => navigation.navigate("Dashboard")}>
           
          <Text>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ItemMenu}  onPress={() => navigation.navigate("Pesquisa")}>
         
         <Text>Pesquisar</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.ItemMenu}  onPress={() => navigation.navigate("AddPet")}>    
          <Text>Adicionar Pet</Text>
         </TouchableOpacity>

        <TouchableOpacity style={styles.ItemMenu}  onPress={() => navigation.navigate("ListaPedidos")}>
          
          <Text>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ItemMenu}  onPress={() => navigation.navigate("Agenda")}>    
          <Text>Minha Agenda</Text>
         </TouchableOpacity>
       
          <View style={{}}>
              <TouchableOpacity style={styles.ItemMenu}  onPress={() => navigation.navigate("Config")}>
               
                <Text>Configurações</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.ItemMenu}  onPress={() => logout()}>
                
                <Text>Sair</Text>
              </TouchableOpacity>
          </View>

        </View>
      </View>
   </DrawerContentScrollView>
  )
}
const widthScreen = Dimensions.get("screen").width

export const styles = StyleSheet.create({
  
  content: {
    margin: "10%", 
    alignItems: 'center',
    gap: 10,
  },
  profileImgContainer: {
    width: widthScreen * 0.3,
    height: widthScreen * 0.3,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:  widthScreen * 0.2,
    zIndex:10
  },
  profileImg: {
    width: widthScreen * 0.3,
    height: widthScreen * 0.3,
    borderRadius:  widthScreen * 0.2,
    zIndex:10
  },
  userName: {
    fontSize: widthScreen * 0.07,
    color: '#474747',
    fontWeight: "bold",
    zIndex:10
  },
  ItemMenu: {
    flexDirection: "row",
    alignItems:"center",
    paddingHorizontal: widthScreen * 0.05,
    paddingVertical: widthScreen * 0.04,
    gap:  widthScreen * 0.05,
   
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA"
  }
});
