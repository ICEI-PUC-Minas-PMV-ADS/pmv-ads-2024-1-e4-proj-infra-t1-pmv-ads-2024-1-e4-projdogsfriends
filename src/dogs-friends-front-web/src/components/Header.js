import React, { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate as useNavegate,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux"

// import { AuthContext } from "../pages/Auth/AuthContext";
import Logo from "../components/Logo/Logo";
import "../App.css";
import { logout } from "../store/slices/authSlice";



const Header = () => {
  const {isLogged} = useSelector(state => state.auth);  

  const dispatch = useDispatch()  
  const localizacao = useLocation();
  const navegacao = useNavegate();
 

  

  const handleLogin = () => {
    navegacao('/auth/login')
    
  };

  const handleLogout = () => {
    // TODO: Implementar função de logout
    // Limpa info de autenticação
   
    dispatch(logout())
    navegacao("/"); // Redirecionar para a página
  };

  return (
    <header className="home-header bg-f1f1f1">
      <Logo />
      <nav className="home-nav">
        {isLogged ? (
          <>
            {localizacao.pathname !== "/cliente/me" && (
              <Link to="auth/perfil" className="nav-link">
                Meus dados
              </Link>
            )}
            <Link to="Pesquisa" className="nav-link">
              Pesquisar
            </Link>
            {localizacao.pathname === "/cliente/me" && (
              <>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </>
            )}
            <button onClick={handleLogout} className="home-button-sair">
              Sair
            </button>
          </>
        ) : (
          <>
            {localizacao.pathname !== "/auth/login" && (
              <Link
                onClick={handleLogin}
                to="/auth/login"
                className="home-button-entrar"
              >
                Entrar
              </Link>
            )}
            {localizacao.pathname !== "/auth/cadastro" && (
              <Link to="/auth/cadastro" className="home-button-cadastrar">
                Cadastre-se
              </Link>
            )}
          </>
        )}

        
      </nav>
    </header>
  );
};
// }

export default Header;
