import React from "react";
import ReactDOM from "react-dom";
import modalCSS from "../css/modalPerfil.module.css";

const Modal = ({ isShowing, hide }) =>
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
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Serralheiro
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Mecanico
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Eletricista
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Carpinteiro
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Jardinagem
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
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
                    placeholder="Leave a comment here"
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
                    placeholder="Leave a comment here"
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
                    checked
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
                  type="text"
                  placeholder="Indique aqui o email ou numero de telemovel"
                  aria-label="default input example"
                />
              </section>
              <br />
              <br />
              <button type="button" class="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
