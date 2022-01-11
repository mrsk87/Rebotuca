import React from "react";
import dashCSS from "../css/dash.module.css";
import sketch from "../assets/img/sketch.png";
import carpImg from "../assets/img/carp.png";
import pintorImg from "../assets/img/pintor.jpg";
import jardImg from "../assets/img/jardinagem.jpg";

function Landing() {
  return (
    <>
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
              Coloque o seu projeto em andamento com a solicitação de
              profissionais num alargado leque de soluções profissionais.
            </p>
            <button type="button" class="btn btn-primary">
              Fazer Pedido
            </button>
          </div>
        </div>
      </section>
      <section className={dashCSS.cards}>
        <div class="card-group">
          <div class="card">
            <img src={carpImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Carpinteiro</h5>

              <button type="button" class="btn btn-secondary">
                Fazer Pedido
              </button>
            </div>
          </div>
          <div class="col-md-1 col-md-offset-2"></div>
          <div class="card">
            <img src={pintorImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pintor</h5>

              <button type="button" class="btn btn-secondary">
                Fazer Pedido
              </button>
            </div>
          </div>
          <div class="col-md-1 col-md-offset-2"></div>
          <div class="card">
            <img src={jardImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Jardineiro</h5>

              <button type="button" class="btn btn-secondary">
                Fazer Pedido
              </button>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className={dashCSS.cards}>
        <div class="card-group">
          <div class="card">
            <img src={carpImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Carpinteiro</h5>

              <button type="button" class="btn btn-secondary">
                Fazer Pedido
              </button>
            </div>
          </div>
          <div class="col-md-1 col-md-offset-2"></div>
          <div class="card">
            <img src={pintorImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pintor</h5>

              <button type="button" class="btn btn-secondary">
                Fazer Pedido
              </button>
            </div>
          </div>
          <div class="col-md-1 col-md-offset-2"></div>
          <div class="card">
            <img src={jardImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Jardineiro</h5>

              <button type="button" class="btn btn-secondary">
                Fazer Pedido
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Landing;
