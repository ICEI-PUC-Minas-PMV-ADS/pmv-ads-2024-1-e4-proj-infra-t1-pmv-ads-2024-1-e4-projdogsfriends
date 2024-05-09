import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import Container from "./components/Container";
import { usePasseador } from "./hooks/usePasseador";
import { useSelector } from "react-redux";



const Passeador = () => {
  
  const { passeadorId } = useParams()
  const {token} = useSelector(state => state.auth)
  const [activeMarker, setActiveMarker] = useState(0)

  const url = `http://localhost:3000/cliente/passeador/${passeadorId}`

  const { client } = usePasseador(url, token)
  console.log(client)
  return (
    
    <Container client={client} activeMarker={activeMarker} setActiveMarker={setActiveMarker}/>
  )
}

export default Passeador