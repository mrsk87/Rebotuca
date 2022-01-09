import React from "react";
import cx from "classnames";
import footerCSS from "../css/footer.module.css";
import logo from "../assets/img/logo.png";

function Footer() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      ></link>

      <footer className={footerCSS.footer_section}>
        <div className="container">
          <div className={cx(footerCSS.footer_content, "pt-5", "pb-5")}>
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className={footerCSS.footer_widget}>
                  <div className={footerCSS.footer_logo}>
                    <a href="index.html">
                      <img
                        src={logo}
                        className={footerCSS.img_fluid}
                        alt="logo"
                      ></img>
                    </a>
                  </div>
                  <div className={footerCSS.footer_text}>
                    <p>© 2022</p>
                    <ul>
                      <li>
                        <a href="#">Termos e condições</a>
                      </li>
                      <li>
                        <a href="#">Privacidade</a>
                      </li>
                    </ul>
                  </div>
                  <div className={footerCSS.footer_social_icon}>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 mb-50">
                <div className={footerCSS.footer_widget}>
                  <div className={footerCSS.footer_widget_heading}>
                    <h3>Rebotuca</h3>
                  </div>
                  <div className={cx("mb-25")}>
                    <ul>
                      <li>
                        <a href="#">O que fazemos</a>
                      </li>
                      <li>
                        <a href="#">Quem somos</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 mb-50">
                <div className={footerCSS.footer_widget}>
                  <div className={footerCSS.footer_widget_heading}>
                    <h3>Clientes</h3>
                  </div>
                  <div className={cx(footerCSS.footer_text, "mb-25")}>
                    <ul>
                      <li>
                        <a href="#">Como funciona?</a>
                      </li>
                      <li>
                        <a href="#">Recomendações de negócio</a>
                      </li>
                      <li>
                        <a href="#">Guias</a>
                      </li>
                      <li>
                        <a href="#">Serviços IKEA</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 mb-50">
                <div className={footerCSS.footer_widget}>
                  <div className={footerCSS.footer_widget_heading}>
                    <h3>Especialistas</h3>
                  </div>
                  <div className={cx(footerCSS.footer_text, "mb-25")}>
                    <ul>
                      <li>
                        <a href="#">Como funciona?</a>
                      </li>
                      <li>
                        <a href="#">Centro de Especialistas</a>
                      </li>
                      <li>
                        <a href="#">Dicas de sucesso</a>
                      </li>
                      <li>
                        <a href="#">Registo</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 mb-50">
                <div className={footerCSS.footer_widget}>
                  <div className={footerCSS.footer_widget_heading}>
                    <h3>Precisa de ajuda?</h3>
                  </div>
                  <div className={cx(footerCSS.footer_text, "mb-25")}>
                    <ul>
                      <li>
                        <a href="#">Centro de Suporte</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
