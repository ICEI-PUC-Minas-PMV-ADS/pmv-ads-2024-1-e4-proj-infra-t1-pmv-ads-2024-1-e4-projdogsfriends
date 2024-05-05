import React, { useEffect, useState } from 'react'
import { useGeocode } from '../../../hooks/useGeocode'

export const useSearchClient = ( url, token ) => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    (async() => {
        const response = await fetch(url, 
        {   method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}` ,
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
