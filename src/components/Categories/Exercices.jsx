import React from "react";
import dataExercices from "../../data/dataExercices";

const Exercices = () => (

);
return (
  <div className="Cards">
    {dataExercices.map((exercice) => (
      <div className="card text-center" key={exercice.id}>
        <div>
          <div className="card-header">{exercice.name}</div>
          <div className="card-body ">
            <h1 className="card-title">Exercice numéro: {exercice.id}</h1>
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
)

export default Exercices;
