import {Routes, Route} from "react-router-dom"

import  {Passeador, Pesquisa}  from "../index.js"

import {Agendamento} from "../Agendamento/Agendamento.jsx"
 

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="pesquisa" element={<Pesquisa />} />
        <Route path="passeador/:passeadorId" element={<Passeador />} />
        <Route path="agendamento" element={<Agendamento />} />
    </Routes>
  )
}
