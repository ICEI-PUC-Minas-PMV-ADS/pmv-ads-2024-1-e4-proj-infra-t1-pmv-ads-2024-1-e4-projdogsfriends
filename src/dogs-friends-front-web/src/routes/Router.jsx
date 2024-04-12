import {Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { AuthRouters } from "../pages/Auth"
import { PrivateRoutes } from "../pages/private/routes/PrivateRoutes"



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
