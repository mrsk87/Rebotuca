import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, loginWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // Trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={() => loginWithEmailAndPassword(email, password)}>
        Login
      </button>
      <button onClick={signInWithGoogle}>Login with Google</button>
      <div>
        <Link to="/reset">Forgot Password?</Link>
      </div>
      <div>
        Don't have an account? <Link to="/register">Register</Link> now.
      </div>
    </div>
  );
}

export default Login;
