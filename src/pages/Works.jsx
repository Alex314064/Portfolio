import React from "react";
import Exercices from "../components/Categories/Exercices";
import Technologies from "../components/Categories/Technologies";
import project from "../assets/Logos/project.svg";
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
          <img className="Logos" src={project}></img>
          <h2>
            <Link
              to="/exercices"
              className="btn btn-primary"
              aria-current="page"
            >
              Voir les exercices
            </Link>
          </h2>
        </div>
        <div>
          <img className="Logos" src={project}></img>
          <h2>
            {" "}
            <Link
              to="/casestudy"
              className="btn btn-primary"
              aria-current="page"
            >
              Voir les technologies utilisées
            </Link>
          </h2>
        </div>
        <div>
          <img className="Logos" src={project}></img>
          <h2>Les projets réalisés</h2>
        </div>
      </div>
    </div>
    <Exercices />
    <Technologies />
  </>
);
export default Works;
