import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Speisekarte from "./pages/Speisekarte";
import Kontakt from "./pages/Kontakt";
import Oeffnungszeiten from "./pages/Oeffnungszeiten";
import Galerie from "./pages/Galerie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Speisekarte />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="/Oeffnungszeiten" element={<Oeffnungszeiten />} />
          <Route path="/Galerie" element={<Galerie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
