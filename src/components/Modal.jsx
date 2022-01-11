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
                  Gostas de pito?
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
                  <br />E onde queres comer o pito?
                </label>
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
