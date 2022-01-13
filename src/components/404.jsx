import "../css/404.css";

function Erno404() {
  return (
    <section className="page_404">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
      ></link>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Ooga booga 🙉⚡</h3>

                <p>A página que procuras não existe!</p>

                <a href="/" className="link_404">
                  Voltar para a página inicial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Erno404;
