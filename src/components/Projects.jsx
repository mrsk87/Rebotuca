import React from "react";
import dashCSS from "../css/dash.module.css";
import sketch from "../assets/img/sketch.png";
import carpImg from "../assets/img/carp.png";
import pintorImg from "../assets/img/pintor.jpg";
import jardImg from "../assets/img/jardinagem.jpg";
import electImg from "../assets/img/electricista.jpg";
import serrImg from "../assets/img/serralheiro.jpg";
import limpImg from "../assets/img/limp.png";
import Modal from "./ModalDash";
import useModal from "./useModal";
import modalCSS from "../css/modalDash.module.css";
import NavBar from "./Navbar";
import Footer from "./Footer";

function Projects() {
  const { isShowing, toggle } = useModal();
  //Modal
  //https://upmostly.com/tutorials/modal-components-react-custom-hooks

  return (
    <>
      <NavBar />
      <section className={dashCSS.projectos}>
        <h1>Projectos</h1>
        <div className={dashCSS.crieProjectos}>
          <div className={dashCSS.iconProjecto}>
            <img alt="100%x280" src={sketch} />
            <br />
          </div>
          <div className={dashCSS.iconProjectoTexto}>
            <h3>Crie o seu projeto</h3>
            <p>
              Coloque o seu projeto em andamento, com a solicitação de
              profissionais num alargado leque de soluções.
            </p>
            <div className={modalCSS.main}>
              <button onClick={toggle} class="btn btn-primary">
                Fazer Pedido
              </button>
              <Modal isShowing={isShowing} hide={toggle} />
            </div>
          </div>
        </div>
      </section>
      <section className={dashCSS.cards}>
        <div class="card-group">
          <div class="card">
            <img src={carpImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Carpinteiro</h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              dolor libero culpa voluptate, dolorum enim cum nihil explicabo
              quia magnam architecto quibusdam praesentium illum iste modi
              similique vero perspiciatis autem?
            </div>
          </div>
          <div class="col-md-1 col-md-offset-2"></div>
          <div class="card">
            <img src={pintorImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pintor</h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
              earum ab. Perspiciatis eveniet tenetur pariatur facere, eligendi
              quod. Quo, aspernatur doloremque quasi quibusdam mollitia facilis
              illo ratione minus exercitationem temporibus?
            </div>
          </div>
          <div class="col-md-1 col-md-offset-2"></div>
          <div class="card">
            <img src={jardImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Jardineiro</h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              accusamus veritatis, rerum delectus neque incidunt. Ducimus,
              officiis illo ipsum explicabo et sit expedita repellendus corrupti
              beatae delectus impedit unde reprehenderit.
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className={dashCSS.cards}>
        <div class="card-group">
          <div class="card">
            <img src={electImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Electricista</h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              veniam labore, corrupti fugit commodi numquam reiciendis quibusdam
              laboriosam, amet at sequi. Architecto, consequatur. Officia
              repudiandae facere, rem aliquam ex qui.
            </div>
          </div>
          <div class="col-md-1 col-md-offset-2"></div>
          <div class="card">
            <img src={serrImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Serralheiro</h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae
              dolorum cupiditate laborum fuga sit distinctio placeat rerum
              blanditiis rem beatae eligendi quisquam, optio, odio earum magni,
              accusamus sapiente praesentium?
            </div>
          </div>
          <div class="col-md-1 col-md-offset-2"></div>
          <div class="card">
            <img src={limpImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Limpeza pós-obra</h5>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur laborum neque provident cumque architecto, debitis
              quas blanditiis expedita illum possimus voluptate, delectus
              tenetur. Quidem, vitae iusto ea dicta odit maxime?
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Projects;
