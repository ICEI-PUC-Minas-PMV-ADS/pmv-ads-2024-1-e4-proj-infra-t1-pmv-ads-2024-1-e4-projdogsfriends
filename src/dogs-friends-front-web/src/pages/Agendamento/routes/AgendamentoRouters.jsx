import {Routes, Route} from "react-router-dom"
import {Agendamento} from "../Agendamento"


export const AgendamentoRouters = () => {
  return (
    <Routes>
        <Route path="agendamento" element={<Agendamento />} />

    </Routes>
  )
}


