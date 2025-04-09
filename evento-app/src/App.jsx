import React, { useState } from "react";
import axios from "axios";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./App.css";
import Header from "./Header";

function App() {
  const [imagen, setImagen] = useState(null);
  const [subiendo, setSubiendo] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleFileChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!imagen) {
      setMensaje("Por favor seleccioná una imagen.");
      return;
    }

    setSubiendo(true);
    setMensaje("");

    const formData = new FormData();
    formData.append("file", imagen);
    formData.append("upload_preset", "evento_upload");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dtzfxcump/image/upload",
        formData
      );

      const imageUrl = response.data.secure_url;

      await addDoc(collection(db, "imagenes"), {
        url: imageUrl,
        timestamp: serverTimestamp(),
      });

      setMensaje("✅ Imagen subida correctamente.");
      setImagen(null);
    } catch (error) {
      console.error("⛔ Error al subir imagen:", error);
      setMensaje("❌ Hubo un problema al subir la imagen.");
    }

    setSubiendo(false);
  };

  return (
    <>
    <Header />
      <div className="header">💗 Galería de la Boda</div>
      <div className="container">
        <h1 className="titulo">Subí tu Foto 📸</h1>
        <input type="file" onChange={handleFileChange} className="file-input" />
        <br />
        <button onClick={handleUpload} disabled={subiendo} className="upload-btn">
          {subiendo ? "Subiendo..." : "Subir Imagen"}
        </button>
        {mensaje && <p className="mensaje-status">{mensaje}</p>}
        <img
          className="decorativa"
          src="/decoracion-boda.png"
          alt="Decoración boda"
        />
      </div>
    </>
  );
}

export default App;
