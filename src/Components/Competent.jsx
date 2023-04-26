import ProgressBar from 'react-bootstrap/ProgressBar';
const Competent = () =>
 {
    return(
        <section className='competent mt-5'>
            <h1 className='mb-5'>Mes Competences</h1>
            <div className="row">
                <div className="col-lg-5 mb-5 ps-5 expert">
                   <h1 className=' float-end'>Outils</h1>
                </div>
                <div className="col-1"></div>
                <div className="col-lg-5 expert mb-5">
                    <h1 className=' float-start'>Languages</h1>
                </div>
            </div>
            <div className="row ">
            <div className='col-lg-6 float-left'>
                <div className="row mb-4 ">
                    <div className="col-lg-4 ">
                    <ProgressBar striped variant="success" now={100}  />
                    </div>
                    <div className="col-lg-2"> Bootstrap</div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-4">
                    <ProgressBar striped variant="success" now={80} />
                    </div>
                    <div className="col-lg-2"> react</div>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className="row mb-4">
                    <div className="col-lg-2 align-items-start"> javascript</div>
                    <div className="col-lg-4">
                    <ProgressBar striped variant="success" now={80} />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-2"> html</div>
                    <div className="col-lg-4">
                    <ProgressBar striped variant="success" now={100} />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-2"> css</div>
                    <div className="col-lg-4">
                    <ProgressBar striped variant="success" now={60} />
                    </div>
                </div>
            </div>
            </div>
            <div className="row">
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
}
export default Competent