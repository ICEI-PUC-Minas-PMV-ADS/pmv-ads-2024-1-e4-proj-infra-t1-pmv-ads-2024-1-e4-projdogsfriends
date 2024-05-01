import {Routes, Route} from "react-router-dom"

import {Login, Cadastro, RecuperarSenha, Perfil} from ".."

export const AuthRouters = () => {
  return (
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="Perfil" element={<Perfil />} />
    </Routes>
  )
}
