import React from "react";

// import { faGithub } from '@fortawesome/free-brands-svg-icons';

import "../App.css";

const Rodape = () => {
  return (
    // <footer className="bg-dark text-center text-lg-start">
    <footer className="container-fluid text-center bg-333">
      <div className="text-center p-3 text-black">
        <span className="text-muted">© 2024 PetFriend</span>
        <span className="text-muted"> | </span>
        <span className="text-muted">Projeto PUC</span>
      </div>
      <div>
        <a
          href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends"
          target="_blank"
          className="social-link"
        >
          <span className="social-icon github App-link">GitHub</span>
        </a>
      </div>
      <div>
        <a href="/politica" className="link-utils">
          <span className="">Política de Privacidade</span>
        </a>
      </div>
    </footer>
  );
};

export default Rodape;
