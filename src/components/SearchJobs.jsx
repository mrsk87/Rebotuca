import React, { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth} from "../firebase";

import dashCSS from "../css/projects.module.css";
import NavBar from "./Navbar";
import Footer from "./Footer";

function ProfSearch() {
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
        <label for="exampleDataList" class="form-label">
          Search Jobs
        </label>
        <input
          class="form-control"
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
        <label for="exampleDataList" class="form-label">
          <br />
          Profissoes
        </label>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Pedreiro
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheck"
          />
          <label class="form-check-label" for="flexCheck">
            Serralheiro
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheck"
          />
          <label class="form-check-label" for="flexCheck">
            Mecanico
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheck"
          />
          <label class="form-check-label" for="flexCheck">
            Eletricista
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheck"
          />
          <label class="form-check-label" for="flexCheck">
            Carpinteiro
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheck"
          />
          <label class="form-check-label" for="flexCheck">
            Jardinagem
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheck"
          />
          <label class="form-check-label" for="flexCheck">
            Limpeza
          </label>
        </div>
        <br />
        <button type="submit" class="input-group-text btn-success">
          <i class="bi bi-search me-2"></i> Procurar
        </button>
      </section>
      <Footer />
    </>
  );
}
export default ProfSearch;
