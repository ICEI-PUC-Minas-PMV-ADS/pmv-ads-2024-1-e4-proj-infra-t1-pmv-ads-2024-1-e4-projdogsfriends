import {Routes, Route} from "react-router-dom"

import {Login, Registro, RecuperarSenha} from ".."

export const AuthRouters = () => {
  return (
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registro />} />
        <Route path="recuperar" element={<RecuperarSenha />} />
    </Routes>
  )
}
