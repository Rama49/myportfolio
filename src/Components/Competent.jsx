import ProgressBar from 'react-bootstrap/ProgressBar';
const Competent = () =>
 {
    return(
        <section className='competent'>
            <div className="row">
                <div className="col-lg-6">
                   <h1>Outils</h1>
                </div>
                <div className="col-lg-6">
                    <h1>Languages</h1>
                </div>
            </div>
            <div className="row">
            <div className='col-lg-6'>
                <div className="row mb-4">
                    <div className="col">
                    <ProgressBar striped variant="success" now={100} />
                    </div>
                    <div className="col"> Bootstrap</div>
                </div>
           
           
                <div className="row mb-4">
                    <div className="col">
                    <ProgressBar striped variant="success" now={100} />
                    </div>
                    <div className="col"> html</div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <ProgressBar striped variant="success" now={80} />
                    </div>
                    <div className="col"> css</div>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className="row mb-4">
                    <div className="col"> Bootstrap</div>
                    <div className="col">
                    <ProgressBar striped variant="success" now={40} />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col"> javascript</div>
                    <div className="col">
                    <ProgressBar striped variant="success" now={20} />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col"> html</div>
                    <div className="col">
                    <ProgressBar striped variant="success" now={60} />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col"> css</div>
                    <div className="col">
                    <ProgressBar striped variant="success" now={80} />
                    </div>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                   <h1>Langues</h1> 
                </div>
                <div className="col-lg-6">
                   <h1>Hobies</h1> 
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <p>Francais</p>
                    <p>anglais</p>
                    <p>wolofs</p>
                </div>
                <div className="col-lg-6">
                <p>Francais</p>
                    <p>anglais</p>
                    <p>wolofs</p>
                </div>
            </div>
        </section>
  );
}
export default Competent