import { useSelector } from "react-redux"
import Container from "../components/Container"
import { ListPedidos } from "../components/ListPedidos"

const Historico = () => {
  const {user} = useSelector(state => state.auth)  
  return (
    <Container user={user}>
       <ListPedidos userId = {user.id}/> 
    </Container>
  )
}

export default Historico