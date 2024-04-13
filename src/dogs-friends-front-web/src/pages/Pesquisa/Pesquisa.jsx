 
import Container from "./components/Container"
import { useCliente } from "./hooks/useCliente"

export const Pesquisa = () => {
  
  const {clients} = useCliente();

  console.log(clients)
  return ( 
    
    <Container>            
                  
    </Container>
  
  )
}
