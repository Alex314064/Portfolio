import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../src/styles/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Exercices from "./components/Categories/Exercices";
import Technologies from "./components/Categories/Technologies";
import Projects from "./components/Categories/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
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
    </BrowserRouter>
  );
}

export default App;
