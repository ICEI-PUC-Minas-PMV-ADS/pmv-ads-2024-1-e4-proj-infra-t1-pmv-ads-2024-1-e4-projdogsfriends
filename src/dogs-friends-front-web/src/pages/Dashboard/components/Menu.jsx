import { Link } from "react-router-dom"


export const Menu = () => {
  return (
    <div className="flex flex-col">
                <Link className="py-1 w-full hover:font-semibold hover:text-blue-950 transition-all duration-100"
                    to={"http://localhost:3001/user/dashboard"}>Dashboard</Link>  
                <Link className="py-1 w-full hover:font-semibold hover:text-blue-950 transition-all duration-100"
                to={"http://localhost:3001/user/dashboard/pedidos"}>Meus Pedidos</Link>  
                <Link className="py-1 w-full hover:font-semibold hover:text-blue-950 transition-all duration-100"
                 to={"http://localhost:3001/user/dashboard/pedidos"}>Pet's</Link>  
                <Link className="py-1 w-full hover:font-semibold hover:text-blue-950 transition-all duration-100"
                to={"http://localhost:3001/user/dashboard/pedidos"}>Favoritos</Link>  
                <Link className="py-1 w-full hover:font-semibold hover:text-blue-950 transition-all duration-100"
                 to={"http://localhost:3001/user/dashboard/pedidos"}>Configurações</Link>  
   </div>
  )
}
