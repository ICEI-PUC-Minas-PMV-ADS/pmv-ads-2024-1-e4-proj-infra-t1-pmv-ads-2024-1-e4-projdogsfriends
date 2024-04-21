import { api } from "../../api/axios"
import { setToken, setUser, startLoading } from "./authSlice"


export const login = (loginUser) => {
    return async (dispatch) => {
        dispatch(startLoading())

        const token = await getToken(loginUser);
       
        dispatch(setToken(token))
        
        const user = await getUser(token)

        dispatch(setUser(user))
        localStorage.setItem("access_token", token)
        return user;
    }
}

export const tryLoginWithToken = () => {
    return async(dispatch) => {
        try {
         const token = localStorage.getItem("access_token") 
         if(token === null || token === undefined){
           dispatch(setToken(null)) 
           return 
         }

         const user = await getUser(token)
        
         if(user === null || user === undefined) return
       
        dispatch(setToken(token)) 
        dispatch(setUser(user))

         return user;
        } catch (error) {
            
        }
    }
}

export const createUser = (newUser) => {
    return async(dispatch) => {
       try {
       const {status} = await api.post('auth/create', newUser)
        if(status !== 201) return;

        dispatch(login({email: newUser.email, senha: newUser.senha}))    
            
       } catch (error) {
        console.log(error)
       }
    }
}

const getUser = async(token) => {
    try {
        const {data} = await api.get('cliente/me', {
            headers:{
                Authorization: `Bearer ${token}`
            },
            data:{ }
        })    
            
      return data
    } catch (error) {
        console.log(error)
    }
}

const getToken = async (loginUser) => {
    const { data } = await api.post('auth/login', loginUser)
 
    return data.access_token
}
