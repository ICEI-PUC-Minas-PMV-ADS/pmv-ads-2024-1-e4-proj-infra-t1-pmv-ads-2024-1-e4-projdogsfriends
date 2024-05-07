import { useEffect, useState } from "react";

export const usePasseador = (url, token) => {
  const [client, setClient] = useState() 
  
  useEffect(() => {
    (async() => {
       try {
        const response = await fetch(url, 
          {   method: 'GET',
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                  body:{}
              }
          });
           
         const res = await response.json();
         setClient(res)
         
       } catch (error) {
         console.log(error)
       }

    })()   
  }, [url])

   

  return {
    client
  }
}
