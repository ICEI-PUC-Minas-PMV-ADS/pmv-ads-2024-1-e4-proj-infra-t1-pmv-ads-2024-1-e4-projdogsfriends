import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createUser, login } from "../../store/slices/auth";
import { logout } from "../../store/slices/authSlice";
import toast from "react-hot-toast";

export const Teste = () => {

  const { user, isLogged, token} = useSelector(state => state.auth);    
  const dispatch = useDispatch()  

  const newUser = {
    "email": "novo4@gmail.com", //alterar email e cpf
    "senha": "123456",
    "nome": "Novo2",
    "sobrenome": "Silva",
    "cpf": "987425396452",
}
const userLogin = {
    "email": "mail3@gmail.com",
    "senha": "123456",
}

  useEffect(() => {
    toast.success(`logado? ${isLogged}`)
   // dispatch(createUser(newUser))
  },[isLogged])


  return (
   
    <div style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
        <button style={{padding: "10px", margin: "10px", color: "blue"}} 
            onClick={() => dispatch(logout())}>Sair</button>
   
        <button style={{padding: "10px",margin: "10px", color: "blue"}}
             onClick={() => dispatch(login(userLogin))}>Login</button>

        <button style={{padding: "10px",margin: "10px", color: "blue"}}
             onClick={() => dispatch(createUser(newUser))}>Novo usuario</button>
    
        <button onClick={() => toast.success("SUCESSO!")}>teste toast</button>
    <div>
    {
        user ? <span>Logado: { user.nome }</span> 
             : <span>Deslogado</span>
    }
    </div>
     
    </div>
  )
}
