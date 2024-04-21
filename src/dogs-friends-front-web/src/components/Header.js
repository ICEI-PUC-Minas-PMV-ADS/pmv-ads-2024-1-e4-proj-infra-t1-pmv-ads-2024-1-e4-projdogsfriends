import React, { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate as useNavegate,
} from "react-router-dom";

// import { AuthContext } from "../pages/Auth/AuthContext";
import Logo from "../components/Logo/Logo";
import "../App.css";

const Header = () => {
  const localizacao = useLocation();
  const navegacao = useNavegate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Inicialmente, o usuário está logado

  // const { isLoggedIn, handleLogout } = useContext(AuthContext);

  const handleLogin = () => {
    setIsLoggedIn(true);
    // navegacao("/cliente/me");
  };

  const handleLogout = () => {
    // TODO: Implementar função de logout
    // Limpa info de autenticação
    setIsLoggedIn(false);
    navegacao("/"); // Redirecionar para a página
  };

  return (
    <header className="home-header bg-f1f1f1">
      <Logo />
      <nav className="home-nav">
        {isLoggedIn ? (
          <>
            {localizacao.pathname !== "/cliente/me" && (
              <Link to="cliente/me" className="nav-link">
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

        {/* <Link to="/auth/login" className="home-button-entrar">
          Entrar
        </Link>
        <Link to="/auth/cadastro" className="home-button-cadastrar">
          Cadastre-se
        </Link> */}

        {/* {localizacao.pathname !== "/auth/login" && (
          <Link to="/auth/login" className="home-button-entrar">
            Entrar
          </Link>
        )}
        {localizacao.pathname !== "/auth/cadastro" && (
          <Link to="/auth/cadastro" className="home-button-cadastrar">
            Cadastre-se
          </Link>
        )}

        {localizacao.pathname !== "/cliente/me" && (
          <Link to="cliente/me" className="cliente-me-link">
            Meus dados
          </Link>
        )}
        <button className="home-button-sair">Sair</button> */}
      </nav>
    </header>
  );
};
// }

export default Header;
