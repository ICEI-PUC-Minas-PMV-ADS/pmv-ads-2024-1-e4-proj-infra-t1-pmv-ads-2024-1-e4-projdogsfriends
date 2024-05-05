import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import Container from "./components/Container";
import { usePasseador } from "./hooks/usePasseador";



const Passeador = () => {
  
  const { passeadorId } = useParams()

  const [activeMarker, setActiveMarker] = useState(0)

  const url = `http://localhost:3000/cliente/passeador/${passeadorId}`

  const { client } = usePasseador(url)
  
  return (
    
    <Container client={client} activeMarker={activeMarker} setActiveMarker={setActiveMarker}/>
  )
}

export default Passeador