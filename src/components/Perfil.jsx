import React from "react";
import perfilCSS from "../css/perfil.module.css";
import Modal from "./ModalPerfil";
import useModal from "./useModal";
import modalCSS from "../css/modalPerfil.module.css";
import userImg from "../assets/img/user.png";
import NavBar from "./Navbar";
import Footer from "./Footer";

function Perfil() {
  const { isShowing, toggle } = useModal();
  //Modal
  //https://upmostly.com/tutorials/modal-components-react-custom-hooks

  return (
    <>
      <NavBar />
      <section className={perfilCSS.perfil}>
        <h3>Perfil</h3>
        <div className={perfilCSS.criePerfil}>
          <div className={perfilCSS.iconPerfil}>
            <img alt="100%x280" src={userImg} />
            <br />
          </div>
          <div className={perfilCSS.iconPerfilTexto1}>
            <h5>Nome Perfil</h5>
            <p>Localidade</p>
            <p>Orçamentos ganhos</p>
            <div className={modalCSS.main}>
              <button onClick={toggle} class="btn btn-primary">
                Editar Perfil
              </button>

              <Modal isShowing={isShowing} hide={toggle} />
            </div>
          </div>
          <div className={perfilCSS.iconPerfilTexto2}>
            <h5>Profissao(oes)</h5>
            <p>trolha</p>
            <p>tratamento de esgotos</p>
          </div>
          <div className={perfilCSS.precoH}>
            Preço medio (preço)
            <br />
          </div>
        </div>
      </section>
      <section className={perfilCSS.perfil}>
        <h3>Descrição</h3>
        <div className={perfilCSS.criePerfil}>
          <div className={perfilCSS.iconPerfilTexto1}>
            <h5>Nome Perfil</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              at optio libero molestias eos repellat nulla eum neque a ab saepe,
              quibusdam unde exercitationem, repellendus corporis impedit!
              Obcaecati, voluptatibus in.
            </p>
          </div>
        </div>
      </section>
      <section className={perfilCSS.perfil}>
        <div className={perfilCSS.criePerfil}>
          <div className={perfilCSS.iconPerfilTexto1}>
            <h5>Percurso Academico</h5>
            <ol>
              <li>Mestrado em Super Bock</li>
              <li>Jardineiro do Snoop Dog</li>
              <li>Curso junta freguesia sobre como lavar panelas</li>
            </ol>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Perfil;
