import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Galeria from "./galeria";
import Admin from "./admin";
import "./index.css"; // 👈 IMPORTANTE

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);
