import App from "../../App";
import dataLangages from "../../data/dataLangages";
import Ruby from "./../../../public/Logos/Ruby.jpg";

const Technologies = () => (
  <div className="langage-menu">
    {dataLangages.map((langage) => (
      <div className="card" style={{ width: "18rem" }} key={langage.id}>
        <img className="card-img-top" src={langage.logo} alt="Card image cap" />
        <div className="card-body">
          <h1>{langage.name}</h1>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default Technologies;
