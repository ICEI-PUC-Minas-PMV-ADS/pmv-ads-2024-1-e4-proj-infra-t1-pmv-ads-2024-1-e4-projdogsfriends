import AsyncStorage from "@react-native-async-storage/async-storage"
import { api } from "./axios/axios"

interface Login {
    email: string,
    senha: string
}

export class Auth {
    async login (LoginDto: Login){
        try{
            const response = await api.post('auth/login', LoginDto)
            return response.data
        }catch(error){
            console.log("error ===>", error)
            throw error
        }
    }
    


    async setAccessToken(token: string){
        await AsyncStorage.setItem("accessToken",token);
    }

    async getAccessToken() {
        return await AsyncStorage.getItem("accessToken");
      }
    
    async removeToken(){
        await AsyncStorage.removeItem("accessToken"); 
    }
}