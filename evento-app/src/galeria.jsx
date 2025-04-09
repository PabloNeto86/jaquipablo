import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import Header from "./Header";
import "./App.css";

function Galeria() {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "imagenes"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const nuevasImagenes = snapshot.docs.map((doc) => doc.data().url);
      setImagenes(nuevasImagenes);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="titulo">Galería del Evento 💗</h1>

        <Link to="/" className="nav-button">Volver a subir</Link>

        <div className="galeria">
          {imagenes.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Foto ${index + 1}`}
            />
          ))}
        </div>

        <img
          src="/decoracion.png"
          alt="Decoración"
          className="decorativa"
        />
      </div>
    </>
  );
}

export default Galeria;