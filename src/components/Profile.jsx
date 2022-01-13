import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router";
import { auth, db } from "../firebase";

import perfilCSS from "../css/perfil.module.css";
import Modal from "./ModalPerfil";
import useModal from "./useModal";
import modalCSS from "../css/modalPerfil.module.css";
import userImg from "../assets/img/user.png";
import NavBar from "./Navbar";
import Footer from "./Footer";

function Profile() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const [uid, setUid] = useState("");
  const [academico, setAcademico] = useState("");
  const [descricao, setDescricao] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [name, setName] = useState("");
  const [preco, setPreco] = useState("");

  const fetchUser = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs[0].data();
      setAcademico(data.academico);
      setDescricao(data.descricao);
      setLocalidade(data.localidade);
      setName(data.name);
      setPreco(data.preco);
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
            <h5>{name}</h5>
            <p>{localidade}</p>
            <p>Orçamentos ganhos</p>
            <div className={modalCSS.main}>
              <button onClick={toggle} class="btn btn-primary">
                Editar Perfil
              </button>

              <Modal isShowing={isShowing} hide={toggle} uid={uid} />
            </div>
          </div>
          <div className={perfilCSS.iconPerfilTexto2}>
            <h5>Profissao(oes)</h5>
            <p>trolha</p>
            <p>tratamento de esgotos</p>
          </div>
          <div className={perfilCSS.precoH}>
            Preço Médio: {preco}
            <br />
          </div>
        </div>
      </section>
      <section className={perfilCSS.perfil}>
        <h3>Descrição</h3>
        <div className={perfilCSS.criePerfil}>
          <div className={perfilCSS.iconPerfilTexto1}>
            <h5>{name}</h5>
            <p>{descricao}</p>
          </div>
        </div>
      </section>
      <section className={perfilCSS.perfil}>
        <div className={perfilCSS.criePerfil}>
          <div className={perfilCSS.iconPerfilTexto1}>
            <h5>Percurso Academico</h5>
            {academico}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Profile;
