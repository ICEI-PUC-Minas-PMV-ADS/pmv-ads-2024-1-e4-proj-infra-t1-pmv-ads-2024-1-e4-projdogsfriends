import React, { useEffect, useState } from 'react'

export const useCliente = () => {
  const [clients, setClients] = useState([])
  const url = "http://localhost:3000/cliente/search?term=teste&estado=MG"
 
  useEffect(() => {
    (async() => {
        const response = await fetch(url, 
        {   method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NjliZTdmNi04NTMwLTQ5MmMtODYzNC1mMzNkY2I4NWVmOTQiLCJlbWFpbCI6Im1haWwyQGdtYWlsLmNvbSIsImlhdCI6MTcxMjg5NjYyOSwiZXhwIjoxNzEyODk3NTI5fQ.nODMzePYuFY8FYe9ZHQcSCEq4Bbq81fz0D7K67s_Lyw',
                body:{}
            }
        });
         
        const res = await response.json();

        setClients(res)
    })()   
  }, [])

  return {
    clients
  }
}
