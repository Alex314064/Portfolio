import App from "../../App";
import dataCaseStudy from "../../data/dataCaseStudy";

const CaseStudy = () => (
  <div className="Cards">
    {dataCaseStudy.map((dataCaseStudy) => (
      <div className="card text-center" key={dataCaseStudy.id}>
        <div>
          <div className="card-header">{dataCaseStudy.name}</div>
          <div className="card-body ">
            <h1 className="card-title"> Cas numéro: {dataCaseStudy.id}</h1>
            <p className="card-text">
              Nom de l'exercice : {dataCaseStudy.description}
            </p>
          </div>
        </div>
        <a href="#" className="btn btn-primary">
          Aller voir le cas
        </a>
      </div>
    ))}
  </div>
);
export default CaseStudy;
