import dataProject from "../../data/dataProjects";

const Projects = () => (
  <main>
    <div className="Cards">
      {dataProject.map((projet) => (
        <div className="card text-center" key={projet.id}>
          <div>
            <div className="card-header">{projet.name}</div>
            <div className="card-body ">
              <h1 className="card-title">projet numéro: {projet.id}</h1>
              <p className="card-text">Description : {projet.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </main>
);
export default Projects;
