// src/admin.jsx
import React, { useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Header from "./Header";


function Admin() {
  useEffect(() => {
    const borrarTodasLasImagenes = async () => {
      const confirmacion = window.confirm("¿Estás seguro de borrar TODAS las imágenes?");
      if (!confirmacion) return;

      try {
        const querySnapshot = await getDocs(collection(db, "imagenes"));
        for (const documento of querySnapshot.docs) {
          await deleteDoc(doc(db, "imagenes", documento.id));
        }
        alert("✅ Todas las imágenes fueron eliminadas de Firestore");
      } catch (error) {
        console.error("Error borrando imágenes:", error);
        alert("❌ Ocurrió un error al borrar las imágenes.");
      }
    };

    borrarTodasLasImagenes();
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>🛠 Panel de Administración</h2>
      <p>Si confirmaste, se estarán borrando las imágenes de la galería.</p>
    </div>
  );
}

export default Admin;
