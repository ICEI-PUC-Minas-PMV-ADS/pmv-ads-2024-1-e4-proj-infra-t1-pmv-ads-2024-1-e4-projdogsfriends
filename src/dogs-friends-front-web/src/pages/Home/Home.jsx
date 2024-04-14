import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src="" alt="Logo" className="home-logo" />

        <nav className="home-nav">
          {/*<Link to="/" className="nav-link">
            Início
  </Link>*/}
          <Link to="/about" className="nav-link">
            Sobre
          </Link>
          {/*<Link to="/services" className="nav-link">
            Serviços
          </Link>*/}
          {/*<Link to="/contact" className="nav-link">
            Contato
          </Link>*/}
        </nav>

        <Link to="/auth/login" className="home-button-connect">
          Conectar-se
        </Link>
      </header>

      <div className="home-content">
        <p className="home-message">
          Bem-vindo ao PetFriend, nossa plataforma para passeios de pets!
        </p>

        <img
          className="home-image"
          src="https://www.treehugger.com/thmb/Xb43cjwU8jrZHf7ZVFwkvYTGH7I=/5939x3965/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__06__Dog_Walk_Loose_Leash-267825dd05914e57b03ca569d6cb11ba.jpg"
          alt="Pet walking"
        />
      </div>

      <footer className="home-footer">
        {/*<a href="https://facebook.com" className="social-link">
          Facebook
        </a>
        <a href="https://twitter.com" className="social-link">
          Twitter
        </a>
        <a href="https://instagram.com" className="social-link">
          Instagram
        </a>*/}
        <p>2024 - PetFriend</p>
      </footer>
    </div>
  );
};
