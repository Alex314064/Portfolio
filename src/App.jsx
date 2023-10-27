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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works">
            <Route index element={<Works />} />
            <Route path="exercices" element={<Exercices />} />
            <Route path="technologies" element={<Technologies />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
