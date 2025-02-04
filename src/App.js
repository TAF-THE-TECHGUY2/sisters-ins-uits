import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/About";
import Events from "./Pages/Event";
import Get from "./Pages/Getinvolved";
import Donate from "./Pages/Donate";
import EFT from "./Pages/EFT";
import Volunteer from "./Pages/Volunteer";
import Contact from "./Components/ContactForm";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AdminPanel from "./Pages/AdminPanel";
import BlogPage from "./Pages/BlogPage";
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
            <Route path="/eft" element={<EFT />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/blogs" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
