import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/About";
import Events from "./Pages/Event";
import Get from "./Pages/Getinvolved";
import Donate from "./Pages/Donate";
import Contact from "./Components/ContactForm";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Get" element={<Get />} />
            <Route path="/Donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
