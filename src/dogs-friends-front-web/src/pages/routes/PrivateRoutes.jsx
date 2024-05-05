import {Routes, Route} from "react-router-dom"

import  {Passeador, Pesquisa}  from "../index.js"

import {Agendamento} from "../Agendamento/Agendamento.jsx"
import Home from "../Dashboard/Home/Home.jsx"
import Historico from "../Dashboard/Pedidos/Historico.jsx"
import Pedido from "../Dashboard/Pedidos/Pedido.jsx"
import FinalizarPedido from "../Dashboard/Pedidos/FinalizarPedido.jsx"
import Profile from "../Dashboard/Profile/Profile.jsx"
 

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="pesquisa" element={<Pesquisa />} />
        <Route path="passeador/:passeadorId" element={<Passeador />} />
        <Route path="agendamento" element={<Agendamento />} />
        <Route path="dashboard" element={<Home />} />
        <Route path="dashboard/pedidos" element={<Historico />} />
        <Route path="dashboard/pedidos/:pedidoId" element={<Pedido />} />
        <Route path="dashboard/pedido/finalizar/:passeioId" element={<FinalizarPedido />} />
        <Route path="dashboard/profile" element={<Profile />} />
    </Routes>
  )
}
