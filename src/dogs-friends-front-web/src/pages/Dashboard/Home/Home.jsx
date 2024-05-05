import { useSelector } from "react-redux"
import Container from "../components/Container"
import { Favoritos, ListPets } from "../components"

 const Home = () => {

  const { user } = useSelector(state => state.auth)  

  console.log(user)
  return (
    <>    
        <Container user={user}>
          <ListPets userId={user.id}/>
          <Favoritos favoritos={user.favCliente} />
        </Container>
    </>
  )
}

export default Home