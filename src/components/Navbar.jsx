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
      <div className="navbar-brand fs-2">
        Bienvenue sur le Portfolio d'Alexis 🖖
      </div>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item fs-3">
            <Link to="/" className="nav-link active" aria-current="page">
              Accueil
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
              A propos
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
        </ul>
        <div className="navbar-right">
          <a
            href="https://github.com/Alex314064"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="git-logo"
              src={`./../public/Logos/github-${theme}.svg`}
              alt="GitHub Logo"
            />
          </a>
          <a
            href="https://linkedin.com/in/alexis-richard-web-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="git-logo"
              src={`./../../public/Logos/linkedin-${theme}.svg`}
              alt="Linkedin Logo"
            />
          </a>
          <button type="button" className="toggle-button" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
