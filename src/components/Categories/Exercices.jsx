import React from "react";
import dataExercices from "../../data/dataExercices";

const Exercices = () => (
  <div className="Cards">
    {dataExercices.map((exercice) => (
      <div className="card text-center" key={exercice.id}>
        <div>
          <div className="card-header">{exercice.id}</div>
          <div className="card-body ">
            <h1 className="card-title">{exercice.name}</h1>
            <img className="Logos" src={exercice.image}></img>
            <p className="card-text">
              Nom de l'exercice : {exercice.description}
            </p>
          </div>
        </div>
        <a href="#" className="btn btn-primary">
          Aller voir l'exercice
        </a>
      </div>
    ))}
  </div>
);
export default Exercices;
