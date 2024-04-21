import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
// import Header from "../../components/Header";
// import Rodape from "../../components/Rodape";

export const Home = () => {

  return (
    <>
      {/* <Header /> */}
      <div className="home-container bg-white">
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
      </div>
      {/* <Rodape /> */}
    </>
  );
};
