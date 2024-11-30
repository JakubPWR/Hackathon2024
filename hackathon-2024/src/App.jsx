import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import { Login } from "./components/Login";
import FindNewHobby from "./components/FindNewHobby";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/find-hobby" element={<FindNewHobby />} />
        <Route path="/tutorial/photography" element={<h1>Fotografia Tutorial</h1>} />
        <Route path="/tutorial/drawing" element={<h1>Rysowanie Tutorial</h1>} />
        <Route path="/tutorial/cooking" element={<h1>Gotowanie Tutorial</h1>} />
      </Routes>
    </>
  );
}

export default App;
