import { api } from "../../api/axios"
import { setToken, setUser, startLoading } from "./authSlice"
import toast from "react-hot-toast";

const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };


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

export const tryLoginWithToken = (oldToken) => {
  return async(dispatch) => {
      try {
       const token = localStorage.getItem("access_token") 
       if(token === null || token === undefined){
         dispatch(setToken(null)) 
         return 
       }
      
       const user = await getUser(token)
      
       if(user === null || user === undefined) return
       dispatch(setUser(user))
     
     if(oldToken !== token) {
       dispatch(setToken(token)) 
     }
       return user;
      } catch (error) {
          
      }
  }
}

export const createUser = (newUser) => {


    return async() => {
       try {
        // const imagePath = await saveImage(newUser.fotoPerfil);
        // newUser.fotoPerfil = imagePath;

       const {statusText} = await api.post('auth/create', newUser, config)
       
       if(statusText !== "Created"){


          toast.success('Usuário cadastrado com sucesso!')

        }

        return statusText
        

        

       // dispatch(login({email: newUser.email, senha: newUser.senha}))    
            
       } catch (error) {

        toast.error(error.response.data.message)
        

       }
      
    }
}

export const getUser = async(token) => {
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


// Função para salvar a imagem no servidor
const saveImage = async (image) => {
    try {
      // Fetch o conteúdo do Blob
      const blobContent = await fetch(image).then((res) => res.blob());
  
      // Crie um objeto FormData para enviar o Blob para a API
      const formData = new FormData();
      formData.append('file', blobContent);
  
      // Faça a solicitação para enviar o arquivo para a API
      const response = await api.post('auth/upload', formData);
  
      // Obtenha o caminho da imagem salva na API
      const imagePath = response.data.path;
  
      return imagePath;
    } catch (error) {
      console.error('Erro ao salvar imagem:', error);
      throw error;
    }
  };
  