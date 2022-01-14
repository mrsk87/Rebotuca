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
import Navbar from "./Navbar";
import Footer from "./Footer";

function Projects() {
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

  const fetchUserProjects = async () => {
    try {
      const q = query(collection(db, "jobs"), where("uid", "==", user?.uid));
      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs[0].data();
      console.log(data);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUser();
    fetchUserProjects();
  }, [user, loading]);

  const { isShowing, toggle } = useModal();
  return (
    <>
      <Navbar />
      <section className={dashCSS.projectos}>
        <h1>Projetos</h1>
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
            <img
              id={dashCSS.card_img}
              src={carpImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Carpinteiro</h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="col-md-1 col-md-offset-2"></div>
          <div className="card">
            <img
              id={dashCSS.card_img}
              src={pintorImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Pintor</h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="col-md-1 col-md-offset-2"></div>
          <div className="card">
            <img
              id={dashCSS.card_img}
              src={jardImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Jardineiro</h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className={dashCSS.cards}>
        <div className="card-group">
          <div className="card">
            <img
              id={dashCSS.card_img}
              src={electImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Electricista</h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
          <div className="col-md-1 col-md-offset-2"></div>
          <div className="card">
            <img
              id={dashCSS.card_img}
              src={serrImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Serralheiro</h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="col-md-1 col-md-offset-2"></div>
          <div className="card">
            <img
              id={dashCSS.card_img}
              src={limpImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Limpeza pós-obra</h5>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Projects;
