import React from "react";
import ReactDOM from "react-dom";
import modalCSS from "../css/modalPerfil.module.css";

import {
  collection,
  where,
  query,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

let state = {};

const updateInput = (e) => {
  state[e.target.name] = e.target.value;
};

const modifyAcc = async (uid) => {
  console.log(uid);
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const snapshot = await getDocs(q);

  const accRef = doc(db, "users", snapshot.docs[0].id);
  await setDoc(
    accRef,
    {
      name: state.name,
      localidade: state.localidade,
      academico: state.academico,
      descricao: state.descricao,
      preco: state.preco,
      telemovel: state.telemovel,
    },
    { merge: true }
  );
  //console.log("Modificado com sucesso");
};

const Modal = ({ isShowing, hide, uid }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={modalCSS.modal_overlay} />
          <div
            className={modalCSS.modal_wrapper}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={modalCSS.modal}>
              <div className={modalCSS.modal_header}>
                <button
                  id={modalCSS["button"]}
                  type="button"
                  className={modalCSS.modal_close_button}
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <section>
                <label for="exampleDataList" class="form-label">
                  <br />
                  Nome
                </label>
                <input
                  class="form-control"
                  name="name"
                  value={state.name}
                  onChange={updateInput}
                  type="text"
                  placeholder="Nome"
                  aria-label="default input example"
                />
                <br />
                <label for="exampleDataList" class="form-label">
                  Codigo Postal / Localidade
                </label>
                <input
                  class="form-control"
                  name="localidade"
                  value={state.localidade}
                  onChange={updateInput}
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="4900-200 Limoeiro Laranja"
                />
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

                <label for="exampleDataList" class="form-label">
                  <br />
                  Descrição
                </label>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    name="descricao"
                    value={state.descricao}
                    onChange={updateInput}
                    id="floatingTextarea"
                  ></textarea>
                  <label for="floatingTextarea">
                    Descriçao sobre voce e o seu trabalho.
                  </label>
                </div>

                <label for="exampleDataList" class="form-label">
                  <br />
                  Percurso Academico
                </label>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    name="academico"
                    value={state.academico}
                    onChange={updateInput}
                    id="floatingTextarea"
                  ></textarea>
                  <label for="floatingTextarea">
                    Coloque os seus feitos curriculares
                  </label>
                </div>

                <label for="exampleDataList" class="form-label">
                  <br />
                  Qual é o preço medio por hora que trabalha
                </label>
                <input
                  class="form-control"
                  name="preco"
                  value={state.preco}
                  onChange={updateInput}
                  type="text"
                  placeholder="10€"
                  aria-label="default input example"
                />

                <label for="exampleDataList" class="form-label">
                  <br />
                  Como gostaria de ser contactado?
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Telemovel
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Email
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Mensagem interna(?)
                  </label>
                </div>
                <input
                  class="form-control"
                  name="telemovel"
                  value={state.telemovel}
                  onChange={updateInput}
                  type="text"
                  placeholder="Indique aqui o email ou numero de telemovel"
                  aria-label="default input example"
                />
              </section>
              <br />
              <br />
              <button class="btn btn-primary" onClick={() => modifyAcc(uid)}>
                Guardar
              </button>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
