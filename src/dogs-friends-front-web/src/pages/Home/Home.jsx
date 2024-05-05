import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
// import Header from "../../components/Header";
// import Rodape from "../../components/Rodape";

// import petWalkingImage from "./img/banner1.png"; // Importe a imagem aqui, comentar a linha conforme necessário
// import petWalkingImage from "./img/banner2.jpg";
import petWalkingImage from "./img/banner.png";

export const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="home-container bg-white">
        <div className="home-content">
          {/* <p className="home-message">
            Bem-vindo ao PetFriend, nossa plataforma para passeios de pets!
          </p> */}
          <p className="home-message">
            Os cachorros, assim como nós, precisam sentir-se bem, saudáveis e
            felizes. Por isso, para nós a saúde e o bem-estar dos pets são prioridades.{" "}

            <br />
            <br />
            O PetFriend é uma plataforma que conecta donos de pets a passeadores
          </p>

          <img
            className="home-image"
            // src="https://www.treehugger.com/thmb/Xb43cjwU8jrZHf7ZVFwkvYTGH7I=/5939x3965/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__06__Dog_Walk_Loose_Leash-267825dd05914e57b03ca569d6cb11ba.jpg"
            src={petWalkingImage}
            alt="Pet walking"
          />
        </div>
      </div>
      {/* <Rodape /> */}
    </>
  );
};
