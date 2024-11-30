import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<h1>About Page</h1>} />
    </Routes>
  );
}

export default App;
