import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../src/styles/App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Exercices from "./components/Categories/Exercices";
import Technologies from "./components/Categories/Technologies";
import Projects from "./components/Categories/Projects";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("body").className = `bg-${theme}`;
  }, [theme]);
  return (
    <BrowserRouter>
      <header>
        <Navbar setTheme={setTheme} theme={theme} />
      </header>
      <main className={`app ${theme}`}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Works">
              <Route index element={<Works />} />
              <Route path="Exercices" element={<Exercices />} />
              <Route path="Technologies" element={<Technologies />} />
              <Route path="Projects" element={<Projects />} />
            </Route>
          </Routes>
        </div>
      </main>
      <footer>
        <Footer setTheme={setTheme} theme={theme} />
      </footer>
    </BrowserRouter>
  );
}

export default App;
