import { useSelector } from "react-redux"
import Container from "../components/Container"
import { useParams } from "react-router-dom"
import { AddReview, FinalizarTransacao } from "../components"

const FinalizarPedido = () => {
    const {user} = useSelector(state => state.auth)  
    const {passeioId} = useParams()

    return (
      <Container user={user}>
         <FinalizarTransacao passeioId={passeioId} />
         <AddReview passeioId={passeioId}/>
      </Container>
    )
}

export default FinalizarPedido