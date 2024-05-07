import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import Container from "./components/Container"
import { useSearchClient } from "./hooks/useSearchClient";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
 

const Pesquisa = () => {

 
  const {token, user} = useSelector(state => state.auth)

  function useQuery(){
    const { search } =useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search])
  }

  const [termo, setTermo] = useState((user.enderecos.length > 0 && user.enderecos[0]) ? user.enderecos[0].cidade : "cidade");
  const [uf, setUf] = useState((user.enderecos.length > 0 && user.enderecos[0]) ? user.enderecos[0].uf : "uf")

  const [activeMarker, setActiveMarker] = useState(0)
   
  const query = useQuery()

  useEffect(() => {
    if(!query.get("term")){
      if(user !== null && user.enderecos.length > 0 && user.enderecos[0] !== null && user.enderecos[0] !== undefined)
      {
        setUf(user.enderecos[0].uf)
        setTermo(user.enderecos[0].cidade)
      }
  }
  }, [user])
  
  useEffect(() => {
    if(query.get("term"))
    setTermo(query.get("term"))
}, [query])

  const url = `http://localhost:3000/cliente/search?term=${termo}&estado=${uf}`
  const {clients } = useSearchClient(url, token); 

  console.log(url)
  
  return ( 
    
    <Container 
      termo={termo} 
      setUf={setUf} 
      setTermo={setTermo} 
      clients={clients} 
      activeMarker={activeMarker} 
      setActiveMarker={setActiveMarker}>            
       
      
       { 
        (clients.length > 0 && clients !== null) &&       
          clients.map((client, index) => (
            <Card 
                  key={client.id} 
                  client={client} 
                  setActiveMarker={setActiveMarker} 
                  index={index}/>
          ))
        }
       
      
    </Container>
  
  )
}

export default Pesquisa