import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Navbar from "./Components/Navbar/navbar.jsx";
import ExerciseCard from "./Components/Workout/ExerciseCard.jsx";
import InstructionPage from "./Components/Workout/InstructionPage.jsx";
import Favourites from "./Components/Workout/Favourites.jsx";
import MainPage from "./Components/Workout/MainPage.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Checkout from "./Components/Shop/Checkout.jsx";
import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
import Hero from "./Components/Hero/hero.jsx";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/Exercise" element={<MainPage />} />
            <Route
              path="/instructions/:exerciseName"
              element={<InstructionPage />}
            />
            <Route path="/Favourites" element={<Favourites />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Contact" element={<Contact />} />
            {/* Set the default route to Exercise page */}
            <Route index element={<MainPage />} />
            <Route path="/hero" element={<Hero />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
