import { useState } from "react";
import { Card } from "./components/Card";
import Container from "./components/Container"
import { useSearchClient } from "./hooks/useSearchClient";
 

const Pesquisa = () => {
  const [termo, setTermo] = useState("Belo Horizonte");
  const [uf, setUf] = useState("MG")

  const [activeMarker, setActiveMarker] = useState(0)
   
  const url = `http://localhost:3000/cliente/search?term=${termo}&estado=${uf}`

  const {clients } = useSearchClient(url); 
  
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