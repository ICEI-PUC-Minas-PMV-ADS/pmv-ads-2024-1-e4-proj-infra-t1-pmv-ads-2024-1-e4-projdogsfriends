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

    async create(data: any){
        try{
            const response = await api.post('auth/create', data,{
                headers: { 
                    'Content-Type': 'application/json'
                  },
            })
            return response.data
        }catch(error){
            console.log("error ===>", error.response.data.message)
            throw error
            
        }
    }
    
    async teste(){
        try{
            const {data} = await api.get('auth/teste')
            console.log(data)
        }catch(error){
            console.log(process.env.API_IP)
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