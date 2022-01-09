import React, { useEffect, useState } from "react";
import cx from "classnames";
import authCSS from "../css/auth.module.css";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";
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
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
      ></link>
      <main className={authCSS.main}>
        <div className={authCSS.container}>
          <section className={authCSS.wrapper}>
            <div className={authCSS.heading}>
              <h1 className={cx(authCSS.text, authCSS.text_large)}>Login</h1>
              <p className={cx(authCSS.text, authCSS.text_normal)}>
                Novo utilizador?{" "}
                <span>
                  <a
                    href="/register"
                    className={cx(authCSS.text, authCSS.text_links)}
                  >
                    Cria uma conta!
                  </a>
                </span>
              </p>
            </div>
            <form name="login" className={authCSS.form}>
              <div className={authCSS.input_control}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={authCSS.input_field}
                  placeholder="Email ou username"
                ></input>
              </div>
              <div className={authCSS.input_control}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={authCSS.input_field}
                  placeholder="Password"
                ></input>
              </div>
              <div className={authCSS.input_control}>
                <a
                  href="/resetpassword"
                  className={cx(authCSS.text, authCSS.text_links)}
                >
                  Recuperar password
                </a>
                <input
                  type="button"
                  onClick={() => loginWithEmailAndPassword(email, password)}
                  className={authCSS.input_submit}
                  value="Login"
                ></input>
              </div>
            </form>
            <div className={authCSS.striped}>
              <span className={authCSS.striped_line}></span>
              <span className={authCSS.striped_text}>ou</span>
              <span className={authCSS.striped_line}></span>
            </div>
            <div className={authCSS.method}>
              <div
                onClick={signInWithGoogle}
                className={authCSS.method_control}
              >
                <a className={authCSS.method_action}>
                  <i
                    className={cx("ion-logo-google", authCSS.ion_logo_google)}
                  ></i>
                  <span>Entrar com conta Google</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Login;
