import {Routes, Route} from "react-router-dom"

import  {Passeador, Pesquisa}  from "../index.js"
 

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="pesquisa" element={<Pesquisa />} />
        <Route path="passeador/:passeadorId" element={<Passeador />} />
    </Routes>
  )
}
