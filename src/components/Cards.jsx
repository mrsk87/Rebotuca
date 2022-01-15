import useModal from "./useModal";
import Modal from "./ModalProject";

function Card(p) {
  console.log(p.props);
  const final = [];

  for (let i = 0; i < p.props.projects.length; i++) {
    final.push(
      <>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                {p.props.projects[i].lookingFor}
              </h4>
              <li>
                <ul>
                  Horas de Contacto: {p.props.projects[i].contactHours}
                </ul>
                <br />
                <ul>Data: {p.props.projects[i].date}</ul> <br />
                <ul>
                  Descrição do Projeto: {p.props.projects[i].description}
                </ul>
                <br />
                <ul>Código Postal: {p.props.projects[i].postalCode}</ul>
                <br />
                <ul>
                  Tempo Requisitado: {p.props.projects[i].requestedTime}
                </ul>
                <br />
              </li>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <>{final}</>;
}

function Cards(num) {
  console.log(num)
  const { isShowing, toggle } = useModal();

  return (
    <>
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-6" />
            <div className="col-6 text-right">
              <button onClick={toggle} className="btn btn-primary mb-3 mr-1">
                Fazer Pedido
              </button>
              <Modal isShowing={isShowing} hide={toggle} uid={num.uid} />
              <a
                className="btn btn-primary mb-3 mr-1"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-arrow-left"></i>
              </a>
              <a
                className="btn btn-primary mb-3 "
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
            <div className="col-12">
              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <Card props={num} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cards;
