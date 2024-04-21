import React, { useEffect, useState } from 'react'
import { useGeocode } from '../../../hooks/useGeocode'

export const useSearchClient = ( url ) => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    (async() => {
        const response = await fetch(url, 
        {   method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYThmNmQ3YS1lOGIzLTRlYjYtOTQ3NS03MzFjNTFiM2UxZTgiLCJlbWFpbCI6Im1haWw2QGdtYWlsLmNvbSIsImlhdCI6MTcxMzMxNzgxMCwiZXhwIjoxNzEzMzE4NzEwfQ.WcjGgFtTBT8j8rgiGp6vBT0PBmeXQEo8vPY4D_yL9fs',
                body:{}
            }
        });
         
        const res = await response.json();

        setClients(res)
    })()   
  }, [url])

   

  return {
    clients,
  }
}
