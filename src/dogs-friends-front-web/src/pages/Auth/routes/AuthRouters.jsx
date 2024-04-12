import {Routes, Route} from "react-router-dom"

import {Login, Cadastro, RecuperarSenha} from ".."

export const AuthRouters = () => {
  return (
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="recuperar" element={<RecuperarSenha />} />
    </Routes>
  )
}
