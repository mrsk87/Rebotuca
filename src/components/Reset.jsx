import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../firebase";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate.replace("/dashboard");
  }, [user, loading]);

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={() => sendPasswordResetEmail(email)}>
        Send password reset email
      </button>
      <div>
        Não tens uma conta? <Link to="/register">Cria uma!</Link>
      </div>
    </div>
  );
}

export default Reset;
