import ProgressBar from "react-bootstrap/ProgressBar";
const Competent = () => {
  return (
    <section className="competent mt-5 container-fluid">
      <h1 className="mb-5">Mes Competences</h1>
      <div className="row">
        <div className="col-lg-6 mb-5 expert">
          <h1 className=" float-end vert">Outils</h1>
        </div>
        <div className="col-1"></div>
        <div className="col-lg-5 expert mb-5">
          <h1 className=" float-start vert">Languages</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="row mb-4 ">
            <div className="col d-flex justify-content-end">
              <div className="w-25 me-4">
                <ProgressBar striped variant="success" now={100} />
              </div>
              <div className=""> Bootstrap</div>
            </div>
          </div>
          <div className="row mb-4 ">
            <div className="col d-flex justify-content-end">
              <div className="w-25 me-4">
              <ProgressBar striped variant="success" now={80} />
              </div>
              <div className="ms-4"> react</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 ps-5 text-start">
          <div className="row mb-4 ps-5 ms-2">
          <div className="col d-flex justify-content-start">
              <div className="me-4"> javascript</div>
          <div className="w-25 me-4">
              <ProgressBar striped variant="success" now={80} />
              </div>
            </div>
          </div>
          <div className="row mb-4 ms-5 ps-1">
          <div className="col d-flex justify-content-start">
          <div className="me-4 pe-5"> html</div>
          <div className="w-25 me-4">
              <ProgressBar striped variant="success" now={100} />
            </div>
            </div>
          </div>
          <div className="row mb-4 ms-5 ps-1">
          <div className="col d-flex justify-content-start">
          <div className="me-4"> css</div>
          <div className="w-25 ms-5 ps-3 ">
          <ProgressBar striped variant="success" now={60} />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-lg-6">
          <h1 className="vert">Langues</h1>
        </div>
        <div className="col-lg-6">
          <h1 className="vert">Hobies</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <p>Francais</p>
          <p>anglais</p>
          <p>wolofs</p>
        </div>
        <div className="col-lg-6">
          <p></p>
          <p>le developpements web en general</p>
          <p>Calculs distribues</p>
        </div>
      </div>
    </section>
  );
};
export default Competent;
