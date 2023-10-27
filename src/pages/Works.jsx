import React from "react";
import Projects from "../../public/Logos/project.svg";
import Technologies from "../components/Categories/Technologies";
import { Link } from "react-router-dom";

const Works = () => (
  <>
    <div className="categorie-projet">
      <div className="welcome">
        <h1> Welcome on the works page. Please, select a category</h1>
        <h1>👇 Les types de projets 👇</h1>
      </div>
      <div className="project-menu">
        <div>
          <img className="Logos" src={Projects}></img>
          <h2>
            <Link
              to="Exercices"
              className="btn btn-primary"
              aria-current="page"
            >
              Voir les exercices
            </Link>
          </h2>
        </div>
        <div>
          <img className="Logos" src={Projects}></img>
          <h2>
            {" "}
            <Link
              to="Technologies"
              className="btn btn-primary"
              aria-current="page"
            >
              Voir les technologies utilisées
            </Link>
          </h2>
        </div>
        <div>
          <img className="Logos" src={Projects}></img>
          <h2>
            <Link to="Projects" className="btn btn-primary" aria-current="page">
              Voir les projets
            </Link>
          </h2>
        </div>
      </div>
    </div>
  </>
);
export default Works;
