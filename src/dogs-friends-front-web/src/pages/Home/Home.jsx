import React, { useState } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';


export const Home = () => {


  return (

    <div className="home-container">

      <header className="home-header">
        <h1 className="home-title">
          Bem-vindo ao PetFriend, nossa plataforma para passeios de pets!
        </h1>
        
        <Link to="/auth/login" className="home-button-connect">Conectar-se</Link>
        {/* <button className="home-button-connect" href="auth/login" >Conectar-se</button> */}
      </header>

      
      <img
        className="home-image"
        src="https://www.treehugger.com/thmb/Xb43cjwU8jrZHf7ZVFwkvYTGH7I=/5939x3965/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__06__Dog_Walk_Loose_Leash-267825dd05914e57b03ca569d6cb11ba.jpg"
        // src="img/img1.jpeg"
        alt="Pet walking"
      />
      <p className="home-description">
        Aqui, tutores podem encontrar profissionais qualificados para
        passear com seus pets.
      </p>
      <Link to="agenda-passeador" className="home-button">Agendar um passeio</Link>
      {/* <button className="home-button">Encontre um passeador</button> */}
      

      <footer className="home-footer">
        <a href="https://www.facebook.com" className="social-link">
          Facebook
        </a>
        <a href="https://www.x.com" className="social-link">
          Twitter
        </a>
        <a href="https://www.instagram.com" className="social-link">
          Instagram
        </a>
      </footer>


    </div>
  );
};
