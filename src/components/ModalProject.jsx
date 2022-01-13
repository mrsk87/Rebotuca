import React from "react";
import ReactDOM from "react-dom";
import modalCSS from "../css/modalProject.module.css";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

let state = {};

const updateInput = (e) => {
  state[e.target.name] = e.target.value;
};

const createJob = async (uid) => {
  await addDoc(collection(db, "jobs"), {
    uid: uid,
    lookingFor: state.lookingFor,
    description: state.description,
    date: state.date,
    requestedTime: state.requestedTime,
    contactHours: state.contactHours,
    postalCode: state.postalCode,
    //contactForm: state.contactForm,
  });
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
                <label htmlFor="exampleDataList" className="form-label">
                  O que procura?
                </label>
                <input
                  className="form-control"
                  name="lookingFor"
                  value={state.lookingFor}
                  onChange={updateInput}
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Pintor, Carpinteiro.."
                />
                <datalist id="datalistOptions">
                  <option value="Pintor" />
                  <option value="Eletricista" />
                  <option value="Carpinteiro" />
                  <option value="Jardineiro" />
                  <option value="Ferreiro" />
                  <option value="Programador" />
                </datalist>
                <label htmlFor="exampleDataList" className="form-label">
                  <br />
                  Faça uma descrição objetiva do que deseja:
                </label>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    name="description"
                    value={state.description}
                    onChange={updateInput}
                    id="floatingTextarea"
                  ></textarea>
                  <label htmlFor="floatingTextarea">
                    Cortar relva em jardim com 20 m2
                  </label>
                </div>
                <label htmlFor="exampleDataList" className="form-label">
                  <br />
                  Escolha a data que deseja começar:
                </label>
                <input
                  className="form-control"
                  name="date"
                  value={state.date}
                  onChange={updateInput}
                  type="date"
                  aria-label="default input example"
                />
                <label htmlFor="exampleDataList" className="form-label">
                  <br />
                  Quanto tempo irá ser necessario o profissional?
                </label>
                <input
                  className="form-control"
                  name="requestedTime"
                  value={state.requestedTime}
                  onChange={updateInput}
                  type="text"
                  placeholder="1 dia, 10 dias, não tenho ideia"
                  aria-label="default input example"
                />
                <label htmlFor="exampleDataList" className="form-label">
                  <br />
                  Que hora prefere para quer ser contactado?
                </label>
                <input
                  className="form-control"
                  name="contactHours"
                  value={state.contactHours}
                  onChange={updateInput}
                  type="text"
                  placeholder="Entre as 12h e as 13h, das 9h as 18h.."
                  aria-label="default input example"
                />
                <br />
                <label htmlFor="exampleDataList" className="form-label">
                  Codigo Postal
                </label>
                <input
                  className="form-control"
                  name="postalCode"
                  value={state.postalCode}
                  onChange={updateInput}
                  placeholder="4900-200 Limoeiro Laranja"
                />
                <label htmlFor="exampleDataList" className="form-label">
                  <br />
                  Como gostaria de ser contactado?
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    name="contactMethod"
                    value={state.contactForm}
                    //onChange={updateInput}
                    type="radio"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Telemovel
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    name="contactMethod"
                    value={state.contactForm}
                    //onChange={updateInput}
                    type="radio"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Email
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    name="contactMethod"
                    value={state.contactForm}
                    //onChange={updateInput}
                    type="radio"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Mensagem interna(?)
                  </label>
                </div>
                <input
                  className="form-control"
                  name="contact"
                  value={state.contact}
                  onChange={updateInput}
                  type="text"
                  placeholder="Indique aqui o email ou numero de telemovel"
                  aria-label="default input example"
                />
              </section>
              <br />
              <br />
              <button className="btn btn-primary" onClick={() => createJob(uid)}>
                Criar Projeto
              </button>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
