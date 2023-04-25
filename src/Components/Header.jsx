import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import photo from '../images/maPhoto.png';
import Navbar from 'react-bootstrap/Navbar';
// import vector from '../images/Vector .png';
import cell from '../images/cell.png';
import enveloppe from '../images/envelop.png';
import place from '../images/place.png';
import balance from '../images/balance.png';
import wave from '../images/wave.svg';



const Header = () =>{
        return(
        <section>
          <div className=" align-items-cente bold text-white Heade"> 
            <div className="Header">
            <Navbar bg=""  className='Navbar' expand="lg t-white">
              <Container>
                {/* <Navbar.Brand href="#home">Acceuil</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto lien">
                    <Nav.Link href="#home" className='ms-5 ps-5 text-white'>Acceuil</Nav.Link>
                    <Nav.Link href="#home" className='ms-5 ps-5 text-white'>Presentation</Nav.Link>
                    <Nav.Link href="#link" className='ms-5 ps-5 text-white'>Portfolio</Nav.Link>
                    <Nav.Link href="#home" className='ms-5 ps-5 text-white'>Competences</Nav.Link>
                    <Nav.Link href="#link" className=' ms-5 ps-5 text-white'>Presentation</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div className="fieldset ">
              <div className="row">
                  <div className="col-lg-6 mt-5 pt-5" >
                    <p className='text1 mb-5'>Bonjour! C'est <span className='name'>RAMA FALL</span> je suis developpeuse backend senior a bakeli</p>
                    <div className="row pt-5">
                      
                        <div className="col-lg-3">
                          <div className="row g-0 ps-3">
                            <div className="col-1">
                              <img src={cell} />
                            </div>
                            <div className="col-9">77 622 65 93</div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="row pe-2">
                            <div className="col-1">
                              <img src={enveloppe} />
                            </div>
                            <div className="col-9">ramafall49@gmail.com</div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="row g-0">
                            <div className="col-1 ms-4">
                              <img src={place} />
                            </div>
                            <div className="col-8">Yoff, Dakar</div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="row g-0">
                            <div className="col-1 ms-4">
                              <img src={balance} />
                            </div>
                            <div className="col-3">Bakeli</div>
                          </div>
                        </div>
                  </div>
                  </div>
                  <div className="col-lg-6">
                      <img src={photo} />
                  </div>
              </div>
            </div>
            </div>
          </div>
          <img src={wave} />
        </section>
    )
    
}

export default Header