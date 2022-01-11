import React from "react";
import ReactDOM from "react-dom";
import modalCSS from "../css/modal.module.css";

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
                  O que procuras?
                </label>
                <input
                  class="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Type to search..."
                />
                <datalist id="datalistOptions">
                  <option value="Pintor" />
                  <option value="Eletricista" />
                  <option value="Carpinteiro" />
                  <option value="Jardineiro" />
                  <option value="Ferreiro" />
                  <option value="Programador" />
                </datalist>
                <label for="exampleDataList" class="form-label">
                  <br />
                  Faça uma escrição e objetivo do que deseja:
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Default input"
                  aria-label="default input example"
                />
                <label for="exampleDataList" class="form-label">
                  <br />
                  Escolha a data que deseja começar:
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Default input"
                  aria-label="default input example"
                />
                <label for="exampleDataList" class="form-label">
                  <br />
                  Quanto tempo irá ser necessario o profissional?
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Default input"
                  aria-label="default input example"
                />
                <label for="exampleDataList" class="form-label">
                  <br />
                  Quando quer ser contactado?
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Default input"
                  aria-label="default input example"
                />
                <label for="exampleDataList" class="form-label">
                  <br />
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Default input"
                  aria-label="default input example"
                />
                <label for="exampleDataList" class="form-label">
                  Codigo Postal
                </label>
                <input
                  class="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Type to search..."
                />
                <datalist id="datalistOptions">
                  <option value="Sim, bem passado" />
                  <option value="Sim, e uma canja" />
                  <option value="Nao, prefiro sande de hortigas" />
                  <option value="Olha tanta luz" />
                  <option value="Nao sei" />
                </datalist>
                <label for="exampleDataList" class="form-label">
                  <br />
                  Onde gostaria de receber os orçamentos?
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Default radio
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
                    Default checked radio
                  </label>
                </div>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Default input"
                  aria-label="default input example"
                />
              </section>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
