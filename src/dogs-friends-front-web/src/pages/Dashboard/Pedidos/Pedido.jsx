import { useSelector } from "react-redux"
import Container from "../components/Container"
import { Comprovante } from "../components"
import { useParams } from "react-router-dom"
const Pedido = () => {
  
  const { user } = useSelector(state => state.auth)
  const {pedidoId} = useParams() 

  return (
    <Container  user={user}>

      <Comprovante pedidoId={pedidoId}/>

    </Container>
  )
}

export default Pedido