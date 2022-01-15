import React, { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebase";

import dashCSS from "../css/projects.module.css";

import NavBar from "./Navbar";
import Footer from "./Footer";

function SearchJobs() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  return (
    <>
      <NavBar />
      <section className={dashCSS.projectos}>
        <label for="exampleDataList" className="form-label">
          Search Jobs
        </label>
        <input
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Localidade"
        />
        <datalist id="datalistOptions">
          <option value="Viana do Castelo" />
          <option value="Lanhelas" />
          <option value="Torre" />
          <option value="Marte" />
          <option value="Jupiter" />
        </datalist>
        <label for="exampleDataList" className="form-label">
          <br />
          Profissoes
        </label>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Pedreiro
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheck"
          />
          <label className="form-check-label" for="flexCheck">
            Serralheiro
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheck"
          />
          <label className="form-check-label" for="flexCheck">
            Mecanico
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheck"
          />
          <label className="form-check-label" for="flexCheck">
            Eletricista
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheck"
          />
          <label className="form-check-label" for="flexCheck">
            Carpinteiro
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheck"
          />
          <label className="form-check-label" for="flexCheck">
            Jardinagem
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheck"
          />
          <label className="form-check-label" for="flexCheck">
            Limpeza
          </label>
        </div>
        <br />
        <button type="submit" className="input-group-text btn-success">
          <i className="bi bi-search me-2"></i> Procurar
        </button>
      </section>
      <Footer />
    </>
  );
}
export default SearchJobs;
