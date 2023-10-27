import App from "../App";
import { Link } from "react-router-dom";
const Navbar = () => (
  <nav className="navbar bg-body-tertiary fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Bienvenue sur le Portfolio d'Alexis 🖖
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Portefolio Alexis Richard
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Works" className="nav-link active" aria-current="page">
                Projets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link active" aria-current="page">
                A propos de moi
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Contact"
                className="nav-link active"
                aria-current="page"
              >
                Me contacter
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex mt-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </div>
  </nav>
);
export default Navbar;
