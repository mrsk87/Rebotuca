import React from "react";
import cx from "classnames";
import landCSS from "../css/landing.module.css";
import slid1 from "../assets/img/design-de-games.jpg";
import slid2 from "../assets/img/design-de-interiores.jpg";
import slid3 from "../assets/img/coffe.jpg";
import slid4 from "../assets/img/white.jpg";
import loct from "../assets/img/location.jpg";
import NavBar from "./Navbar";
import Footer from "./Footer";

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
          <h3>Something</h3>
          <p className={landCSS.p}>
            Aliquam condimentum hendrerit nisi, nec vestibulum mi feugiat ut.
            Donec lobortis nisi neque, in egestas eros venenatis eu. Vestibulum
            nulla nisi, venenatis at pretium id, fermentum quis risus.
          </p>
          <button type="button" class="btn btn-primary">
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
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fa fa-arrow-left"></i>
                </a>
                <a
                  class="btn btn-primary mb-3 "
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="next"
                >
                  <i class="fa fa-arrow-right"></i>
                </a>
              </div>
              <div class="col-12">
                <div
                  id="carouselExampleIndicators2"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>
                                Instalação Ar Condicionado
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>
                                Remodelação de apartameto
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>
                                Limpeza de pós-obras
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
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
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
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
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
          <h3>Onde está o Rebotuca</h3>
          <p className={landCSS.p}>
            Neste momento so se encontra presente em Viana do Castelo.
          </p>
          <br />
          <button type="button" class="btn btn-primary">
            Viana do Castelo
          </button>
        </div>
      </section>
      <div className={landCSS.slideJobs}>
        <section class="pt-5 pb-5" id={landCSS["sectionSlide"]}>
          <div className="container">
            <div class="row">
              <div class="col-6">
                <h3 class="mb-3">Serviços na sua área </h3>
              </div>
              <div class="col-6 text-right">
                <a
                  class="btn btn-primary mb-3 mr-1"
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fa fa-arrow-left"></i>
                </a>
                <a
                  class="btn btn-primary mb-3 "
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="next"
                >
                  <i class="fa fa-arrow-right"></i>
                </a>
              </div>
              <div class="col-12">
                <div
                  id="carouselExampleIndicators2"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Pintor</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>Carpinteiro</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                            />
                            <div class="card-body">
                              <p className={landCSS.card_title}>
                                Construção civil
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
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
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
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              aliquid, commodi dicta cumque animi incidunt excepturi impedit
              dolore sit nemo dolorum omnis laudantium recusandae quod autem
              labore sapiente. Quam, ullam!
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              quos corrupti incidunt optio porro dolorem atque eius eligendi
              sapiente, repudiandae labore accusamus voluptatum numquam eum est
              dolor delectus consequatur repellendus!
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              eligendi ab pariatur optio vel harum veritatis voluptates
              excepturi maiores iure quam nisi eius obcaecati tempore,
              laboriosam dolorem sapiente, voluptatum error.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Landing;
