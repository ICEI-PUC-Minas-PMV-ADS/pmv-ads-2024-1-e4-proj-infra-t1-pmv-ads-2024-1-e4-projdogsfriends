import {Routes, Route} from "react-router-dom"

import { AuthRouters } from "../Auth"
import { Home } from "../Home"
import { PrivateRoutes } from "../private/routes/PrivateRoutes"

 

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="auth/*" element={<AuthRouters />} />

        {/*Rotas privadas*/}
        <Route path="user/*" element={<PrivateRoutes />} />
    </Routes>
  )
}
