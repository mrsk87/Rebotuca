import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router";
import { auth, db } from "../firebase";

import dashCSS from "../css/projects.module.css";

import sketch from "../assets/img/sketch.png";
import carpImg from "../assets/img/carp.png";
import pintorImg from "../assets/img/pintor.jpg";
import jardImg from "../assets/img/jardinagem.jpg";
import electImg from "../assets/img/electricista.jpg";
import serrImg from "../assets/img/serralheiro.jpg";
import limpImg from "../assets/img/limp.png";

import Modal from "./ModalProject";
import useModal from "./useModal";
import NavBar from "./Navbar";
import Footer from "./Footer";

function Projects() {
  const { isShowing, toggle } = useModal();
  //Modal
  //https://upmostly.com/tutorials/modal-components-react-custom-hooks
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [uid, setUid] = useState("");

  const fetchUser = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs[0].data();
      setUid(data.uid);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUser();
  }, [user, loading]);

  const { isShowing, toggle } = useModal();
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
            <div className={dashCSS.main}>
              <button onClick={toggle} className="btn btn-primary">
                Fazer Pedido
              </button>
              <Modal isShowing={isShowing} hide={toggle} uid={uid} />
            </div>
          </div>
        </div>
      </section>
      <section className={dashCSS.cards}>
        <div className="card-group">
          <div className="card">
            <img src={carpImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Carpinteiro</h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              dolor libero culpa voluptate, dolorum enim cum nihil explicabo
              quia magnam architecto quibusdam praesentium illum iste modi
              similique vero perspiciatis autem?
            </div>
          </div>
          <div className="col-md-1 col-md-offset-2"></div>
          <div className="card">
            <img src={pintorImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pintor</h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
              earum ab. Perspiciatis eveniet tenetur pariatur facere, eligendi
              quod. Quo, aspernatur doloremque quasi quibusdam mollitia facilis
              illo ratione minus exercitationem temporibus?
            </div>
          </div>
          <div className="col-md-1 col-md-offset-2"></div>
          <div className="card">
            <img src={jardImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Jardineiro</h5>
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
        <div className="card-group">
          <div className="card">
            <img src={electImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Electricista</h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              veniam labore, corrupti fugit commodi numquam reiciendis quibusdam
              laboriosam, amet at sequi. Architecto, consequatur. Officia
              repudiandae facere, rem aliquam ex qui.
            </div>
          </div>
          <div className="col-md-1 col-md-offset-2"></div>
          <div className="card">
            <img src={serrImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Serralheiro</h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae
              dolorum cupiditate laborum fuga sit distinctio placeat rerum
              blanditiis rem beatae eligendi quisquam, optio, odio earum magni,
              accusamus sapiente praesentium?
            </div>
          </div>
          <div className="col-md-1 col-md-offset-2"></div>
          <div className="card">
            <img src={limpImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Limpeza pós-obra</h5>
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
