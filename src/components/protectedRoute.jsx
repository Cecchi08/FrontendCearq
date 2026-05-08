import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(
    sessionStorage.getItem("authorized") === "true"
  );

  const correctPassword = import.meta.env.VITE_DASHBOARD_PASSWORD;

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🚫 validar caracteres permitidos
    const onlyLettersNumbers = /^[a-zA-Z0-9]+$/;

    if (!onlyLettersNumbers.test(password)) {
      alert("Solo se permiten letras y números");
      return;
    }

    if (password === correctPassword) {
      sessionStorage.setItem("authorized", "true");
      setAuthorized(true);
    } else {
      alert("Contraseña incorrecta");
    }
  };

  if (authorized) return children;

  return (
    <div style={{ padding: "40px", textAlign: "center",   position: "absolute", left: "50%", transform: "translateX(-50%)"}}>
      <h2 style={{color: "#000"}}>Ingrese la contraseña</h2>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ all: "unset", padding: "8px", backgroundColor: "#c4c4c4", color: "#000", borderRadius: "8px" }}
        />

        <button
          type="submit"
          style={{ marginLeft: "10px", padding: "8px 20px" }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
