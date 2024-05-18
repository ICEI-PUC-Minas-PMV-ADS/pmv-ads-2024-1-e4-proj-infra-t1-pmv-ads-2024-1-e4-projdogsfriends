import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Cliente } from "../../api/Cliente"
import { useEffect } from "react"
import { useAuth } from "../../hooks/useAuth"
import { Auth } from "../../api/Auth"

const Home = () => {
  const authController = new Auth()
  const clienteController = new Cliente()
  // authController.removeToken()
  //const clienteController = new Cliente()
  
  // useEffect(() =>{
  //   (
  //       async() => {
  //           const data = {
  //             "email": "mail3@gmail.com",
  //             "senha": "123456",
  //         }
  //           try{
  //           const res = await  clienteController.getCliente("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzU3ZjBkZS1hMTVlLTQ4OTQtOWU5OC01NDE1MGE3NDE4MDMiLCJlbWFpbCI6Im1haWwzQGdtYWlsLmNvbSIsImlhdCI6MTcxNTM2NjQ5MywiZXhwIjoxNzE1MzY3MzkzfQ.bRn72LBPxmrPUdqMyvzT3OdLCoEo3DrnONpaNFUF818")
  //           console.log(res)  
  //           }catch(err){
  //               console.log(err)
  //           }
  //       }
  //   )()
  // },[])

  const {startLogin, user} = useAuth()
  console.log(user)
  const data = {
                "email": "mail3@gmail.com",
                "senha": "123456",
            }

  const login = async() => {
     await startLogin(data)
    //await authController.teste();
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzU3ZjBkZS1hMTVlLTQ4OTQtOWU5OC01NDE1MGE3NDE4MDMiLCJlbWFpbCI6Im1haWwzQGdtYWlsLmNvbSIsImlhdCI6MTcxNTU3NTU5NCwiZXhwIjoxNzE1NTc2NDk0fQ.XOg7hST1n1YOEhrWnZL3M_C1_g8kcirmdYEC-MO2x6E"
    // const res = await clienteController.findClientePasseador("6757f0de-a15e-4894-9e98-54150a741803", token)
    // console.log("res ===>", JSON.stringify(res, 2, 1))
  }

  return (
    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity onPress={() => login()}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <Text>
          user:
          {
            JSON.stringify(user)
          }
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontFamily: "bold"
  }
})

export default Home