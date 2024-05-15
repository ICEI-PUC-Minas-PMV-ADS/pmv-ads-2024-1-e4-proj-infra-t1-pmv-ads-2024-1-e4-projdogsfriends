import { api } from "./axios/axios";

export class File{
   
    async upload(data:object){
        const url = `http://${process.env.API_IP}:3000/files/upload`
      
        try {
            const formData = new FormData();
           
                formData.append("image", {
                    uri: data.uri,
                    name: data.name,
                    type: data.type,
                });
           

            const params = {
                method:"POST",
                headers: {
                    'Content-Type': 'multipart/form-data',               
                },
                body: formData,
            };

            const response = await fetch(url, params);
            const result = await response.json();
           
            if(response.status !== 201){               
                throw result;
            }
                
            return result.secureUrl;

        } catch (error) {
            throw error
        }
    }

    async getImage(url:string){
       try {
         
        const data = await api.get(`files/file/${url}`)
        console.log(JSON.stringify(data,null,2))
        return data
       } catch (error) {
        console.log("error",error)
       }
    }
}