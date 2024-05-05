import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import Container from "./components/Container"
import { useSearchClient } from "./hooks/useSearchClient";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
 

const Pesquisa = () => {

 
  const {token, user} = useSelector(state => state.auth)

  console.log(user)

  function useQuery(){
    const { search } =useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search])
  }

  const [termo, setTermo] = useState("");
  const [uf, setUf] = useState("MG")

  const [activeMarker, setActiveMarker] = useState(0)
   
  const query = useQuery()

  useEffect(() => {
    if(!query.get("term")){
      if(user !== null && user.enderecos.length > 0 && user.enderecos[0] !== null && user.enderecos[0] !== undefined)
      {
        setUf(user.enderecos.uf)
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
  
  return ( 
    
    <Container 
      termo={termo} 
      setUf={setUf} 
      setTermo={setTermo} 
      clients={clients} 
      activeMarker={activeMarker} 
      setActiveMarker={setActiveMarker}>            
       
      
       {
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