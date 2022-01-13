import React from "react";
import ReactDOM from "react-dom";
import modalCSS from "../css/modalProject.module.css";

let state = {};

/*const updateInput = (e) => {
  state[e.target.name] = e.target.value;
};

const createJob = async (uid) => {
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
};*/

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
                  O que procura?
                </label>
                <input
                  class="form-control"
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
                <label for="exampleDataList" class="form-label">
                  <br />
                  Faça uma descrição e objetivo do que deseja:
                </label>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label for="floatingTextarea">
                    Cortar relva em jardim com 20 m2
                  </label>
                </div>
                <label for="exampleDataList" class="form-label">
                  <br />
                  Escolha a data que deseja começar:
                </label>
                <input
                  class="form-control"
                  type="date"
                  placeholder="10/02/2100"
                  aria-label="default input example"
                />
                <label for="exampleDataList" class="form-label">
                  <br />
                  Quanto tempo irá ser necessario o profissional?
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="1 dia, 10 dias, não tenho ideia"
                  aria-label="default input example"
                />
                <label for="exampleDataList" class="form-label">
                  <br />
                  Que hora prefere para quer ser contactado?
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Entre as 12h e as 13h, das 9h as 18h.."
                  aria-label="default input example"
                />
                <br />
                <label for="exampleDataList" class="form-label">
                  Codigo Postal
                </label>
                <input
                  class="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="4900-200 Limoeiro Laranja"
                />
                <datalist id="datalistOptions">
                  <option value="4900-208 Penedo de Cima" />
                  <option value="4900-508 Penedo de baixo" />
                  <option value="4950-208 Caminho fundo" />
                  <option value="4970-208 Rua Dr Antonio sem Força" />
                </datalist>
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
