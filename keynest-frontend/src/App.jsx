import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* components */
import HeaderComp from "./components/Header";
import FooterComp from "./components/FooterComp";

/* pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Apartment from "./pages/Apartment";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="app-container">
        <HeaderComp />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/apartment/:id" element={<Apartment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <FooterComp />
      </div>
    </Router>
  );
}

export default App;