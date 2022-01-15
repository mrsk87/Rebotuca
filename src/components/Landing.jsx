import React from "react";
import cx from "classnames";
import landCSS from "../css/landing.module.css";
import slid1 from "../assets/img/design-de-games.jpg";
import slid2 from "../assets/img/design-de-interiores.jpg";
import slid3 from "../assets/img/coffe.jpg";
import slid4 from "../assets/img/white.jpg";

import carpImg from "../assets/img/carp.png";
import pintorImg from "../assets/img/pintor.jpg";
import jardImg from "../assets/img/jardinagem.jpg";
import eletImg from "../assets/img/eletImg.png";
import serrImg from "../assets/img/serralheiro.jpg";
import pedrImg from "../assets/img/pedrImg.jpg";
import mecImg from "../assets/img/mecImg.jpg";
import canaImg from "../assets/img/canaImg.jpg";
import limpImg from "../assets/img/limp.png";

import loct from "../assets/img/location.jpg";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";

function Landing() {
  return (
    <>
      <NavBar />
      <div id={landCSS.slideset3}>
        <div>
          <img className={landCSS.img} src={slid1}></img>
        </div>
        <div>
          <img className={landCSS.img} src={slid4}></img>
        </div>
        <div>
          <img className={landCSS.img} src={slid2}></img>
        </div>
        <div>
          <img className={landCSS.img} src={slid4}></img>
        </div>
        <div>
          <img className={landCSS.img} src={slid3}></img>
        </div>
        <div>
          <img className={landCSS.img} src={slid4}></img>
        </div>
      </div>

      <main className={landCSS.main}>
        <input
          className={landCSS.input}
          id={landCSS["tab1"]}
          type="radio"
          name="tabs"
          checked
        />
        <label className={landCSS.label} htmlFor={landCSS["tab1"]}>
          Encontrar profissionais
        </label>
        <input
          className={landCSS.input}
          id={landCSS["tab2"]}
          type="radio"
          name="tabs"
        />
        <label className={landCSS.label} htmlFor={landCSS["tab2"]}>
          Encontrar clientes
        </label>
        <input
          className={landCSS.input}
          id={landCSS["tab3"]}
          type="radio"
          name="tabs"
        />

        <section className={landCSS.section} id={landCSS.content1}>
          <h3>Encontrar profissionais</h3>
          <p className={landCSS.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis adipiscing risus, porttitor viverra urna condimentum et.
          </p>

          <form action="" class="">
            <div class="input-group mb-3">
              <input
                id={landCSS["inputSearch"]}
                type="text"
                class="form-control form-control-lg"
                placeholder="Procure (Eletricista, Canalizador, Pintor...)"
              />
              <button type="submit" class="input-group-text btn-success">
                <i class="bi bi-search me-2"></i> Procurar
              </button>
            </div>
          </form>
        </section>
        <section className={landCSS.section} id={landCSS.content2}>
          <h3>Encontre clientes</h3>
          <p className={landCSS.p}>
            Procure anuncios ativos, clientes que precisam da sua ajuda para
            finalizar o seu projeto. Envie o seu orçamento e agarre essa
            oportunidade.
          </p>
          <button href="/searchjobs" type="button" class="btn btn-primary">
            Encontrar
          </button>
        </section>
      </main>

      <div className={landCSS.slideJobs}>
        <section class="pt-5 pb-5" id={landCSS["sectionSlide"]}>
          <div class="container">
            <div class="row">
              <div class="col-6">
                <h3 class="mb-3">Serviços mais procurados </h3>
              </div>
              <div class="col-6 text-right">
                <a
                  class="btn btn-primary mb-3 mr-1"
                  href="#carousel"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fa fa-arrow-left"></i>
                </a>
                <a
                  class="btn btn-primary mb-3 "
                  href="#carousel"
                  role="button"
                  data-slide="next"
                >
                  <i class="fa fa-arrow-right"></i>
                </a>
              </div>
              <div class="col-12">
                <div id="carousel" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={pedrImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Pedreiro</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={carpImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Carpinteiro</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={serrImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Serralheiro</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={jardImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Jardineiro</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={canaImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Canalizador</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={mecImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Mecanico</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={eletImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Eletricista</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={limpImg}
                            />

                            <div class="card-body">
                              <p className={landCSS.card_title}>
                                Limpeza de pós-obras
                              </p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={pintorImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Pintor</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className={landCSS.sctLoct}>
        <div className={landCSS.divLoct}>
          <img className={landCSS.imgLoct} src={loct} alt="" />
        </div>
        <div className={landCSS.loctBtn}>
          <h3>
            Onde está situado o <b>Rebotuca</b>?
          </h3>
          <br />
          <p className={landCSS.p}>
            Neste momento só nos encontramos presentes em{" "}
            <b>Viana do Castelo</b>.
          </p>
          <p className={landCSS.p}>
            Porém fique atento! Brevemente teremos nossos serviços em todo o
            país!
          </p>
          <br />
          <a
            href="https://www.google.com/maps/place/ESTG+-+Escola+Superior+de+Tecnologia+e+Gest%C3%A3o+%7C+Polit%C3%A9cnico+do+Porto/@41.366853,-8.1969157,17z/data=!3m1!4b1!4m5!3m4!1s0xd24ebb9287835e1:0xca919ba04ec42efc!8m2!3d41.366849!4d-8.194727"
            className={landCSS.btnLoct}
          >
            <button type="button" class="btn btn-primary">
              Abrir o Maps
            </button>
          </a>
        </div>
      </section>
      <div className={landCSS.slideJobs}>
        <section class="pt-5 pb-5" id={landCSS["sectionSlide"]}>
          <div class="container">
            <div class="row">
              <div class="col-6">
                <h3 class="mb-3">Serviços mais procurados</h3>
              </div>
              <div class="col-6 text-right">
                <a
                  class="btn btn-primary mb-3 mr-1"
                  href="#carousel2"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fa fa-arrow-left"></i>
                </a>
                <a
                  class="btn btn-primary mb-3 "
                  href="#carousel2"
                  role="button"
                  data-slide="next"
                >
                  <i class="fa fa-arrow-right"></i>
                </a>
              </div>
              <div class="col-12">
                <div id="carousel2" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={pedrImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Pedreiro</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={carpImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Carpinteiro</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={serrImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Serralheiro</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={jardImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Jardineiro</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={canaImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Canalizador</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={mecImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Mecanico</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={eletImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Eletricista</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={limpImg}
                            />

                            <div class="card-body">
                              <p className={landCSS.card_title}>
                                Limpeza de pós-obras
                              </p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              id={landCSS.card_img}
                              class="img-fluid"
                              alt="100%x280"
                              src={pintorImg}
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Pintor</p>
                              <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={landCSS.tabViewBox}>
        <div className={landCSS.tabView}>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Dê vida ao seu projeto
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Como funciona
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Onde posso utilizar
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              A plataforma vem ajudar a ver a sua idea ser executada por
              profissionais em varias areas. Seja o seu jardim, seja um muro, ou
              o seu carro, ou a sua instalaçao eletrica, canalizador... nao
              deixe de ver as suas ideias satisfeitas por nao conhecer
              profissional da area.
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              Esta plataforma foi criada com o intuito de poder dar oportunidade
              as pessoas de poderem ver ser remunerados as suas habilidades
              profissionais, podendo assim conseguir dar uma vida melhor as
              pessoas nao as privando de requerer entidade patronal para
              trabalhar na are aque mais gosta.
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              A nossa plataforma está disponível em vários formatos, podendo
              assim abranger um leque maior de pessoas. em formato web para que
              possa aceder desde praticamente qualquer dispositivo que tenha um
              browser e internet , e também uma aplicação para android.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Landing;
