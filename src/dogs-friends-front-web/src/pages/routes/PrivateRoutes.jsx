import {Routes, Route} from "react-router-dom"
import { Pesquisa } from "../Pesquisa/Pesquisa"
 

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="pesquisa" element={<Pesquisa />} />
    </Routes>
  )
}
