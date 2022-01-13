import React, { useEffect, useState } from "react";
import cx from "classnames";
import authCSS from "../css/auth.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Tens que inserir o teu nome!");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/projects");
  }, [user, loading]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
      />
      <main className={authCSS.main}>
        <div className={authCSS.container}>
          <section className={authCSS.wrapper}>
            <div className={authCSS.heading}>
              <h1 className={cx(authCSS.text, authCSS.text_large)}>Register</h1>
              <p className={cx(authCSS.text, authCSS.text_normal)}></p>
              <form name="login" className={authCSS.form}>
                <div className={authCSS.input_control}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={authCSS.input_field}
                    placeholder="Nome"
                  />
                </div>
                <div className={authCSS.input_control}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={authCSS.input_field}
                    placeholder="Email ou username"
                  />
                </div>
                <div className={authCSS.input_control}>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={authCSS.input_field}
                    placeholder="Password"
                  />
                </div>
                <input
                  type="button"
                  onClick={() => register(name, email, password)}
                  className={authCSS.input_submit}
                  value="Register"
                ></input>
                <button onClick={register}>Register</button>
                <button onClick={signInWithGoogle}>Register with Google</button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Register;
