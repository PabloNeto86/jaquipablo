import React from "react";
import "./App.css";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#b7cd71",
        color: "#fff",
        padding: "30px 20px",
        textAlign: "center",
        borderBottom: "4px solid gold",
      }}
    >
      <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "3rem", margin: "0" }}>
      💕 Jaqui & Pablo
      </h1>
      <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "1.3rem", marginTop: "10px" }}>
        10 de mayo de 2025
      </p>
      
    </header>
  );
}

export default Header;

