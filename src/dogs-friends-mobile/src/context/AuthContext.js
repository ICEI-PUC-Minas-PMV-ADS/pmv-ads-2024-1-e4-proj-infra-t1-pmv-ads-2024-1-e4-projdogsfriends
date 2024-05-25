import { createContext, useEffect, useState } from "react";
import { Auth } from "../api/Auth";
import { Alert } from "react-native";
import { Cliente } from "../api/Cliente";

export const AuthContext = createContext();

const authController = new Auth();
const clientController = new Cliente()

export function AuthProvider({children}){
   const [user, setUser] = useState(null)
   const [token, setToken] = useState(null)
   

   useEffect(() => {
    (async() => {
        let accessToken = await authController.getAccessToken()
        if(accessToken){
            setToken(accessToken)
        }
    })()
   },[])

   useEffect(() => {
        (async()=>{
        if(token !== null)
           await login(token)
        })()
    }, [token])


   const startLogin = async(dataAccess) => {
    try {

        const {access_token} = await authController.login(dataAccess);
        setToken(access_token)
    } catch (error) {
        Alert.alert("Não foi possivel efetuar o login, verifique seu email e senha...")
    }
}

const login = async(token) => {
    try {
         
        const response = await clientController.getCliente(token)
        await authController.setAccessToken(token)
 
        setUser(response) 
        
    } catch (error) {
       console.log(error)
       setUser(null)
    }
 }
   
   data = {
        user,
        setUser,
        token,
        startLogin
    }

    return <AuthContext.Provider value={data}>{ children }</AuthContext.Provider>
}

