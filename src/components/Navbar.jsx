import App from "../App";
import { Link } from "react-router-dom";

const Navbar = ({ setTheme, theme }) => {
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar navbar-${theme} bg-${theme} nav-style `}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand fs-2" src={"netflix"}>
        Bienvenue sur le Portfolio d'Alexis 🖖
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item fs-3">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item fs-3">
            <Link to="/Works" className="nav-link active" aria-current="page">
              Projets
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="nav-link active fs-3"
              aria-current="page"
            >
              A propos de moi
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="Contact"
              className="nav-link active fs-3"
              aria-current="page"
            >
              Me contacter
            </Link>
          </li>
          <li className="form-check form-switch toggle-button fs-3">
            <label
              className={`form-check-label ${theme}`}
              htmlFor="flexSwitchCheckDefault"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </label>
            <input
              className={`form-check-input ${theme}`}
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={toggleTheme}
            />
          </li>
        </ul>
        <form className="d-flex custom-search">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 m-2"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
