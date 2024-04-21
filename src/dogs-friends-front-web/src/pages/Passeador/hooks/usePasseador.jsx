import { useEffect, useState } from "react";

export const usePasseador = (url) => {
  const [client, setClient] = useState() 
  
  useEffect(() => {
    (async() => {
       try {
        const response = await fetch(url, 
          {   method: 'GET',
              headers: {
                  "Content-Type": "application/json",
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYThmNmQ3YS1lOGIzLTRlYjYtOTQ3NS03MzFjNTFiM2UxZTgiLCJlbWFpbCI6Im1haWw2QGdtYWlsLmNvbSIsImlhdCI6MTcxMzQ4MTM4MywiZXhwIjoxNzEzNDgyMjgzfQ.zRPftDTmpdjBAtHTUEUP94Tbc4HZGnTwUcVtXRn9qBQ',
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
