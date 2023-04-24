import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import photo from '../images/maPhoto.png';
import Navbar from 'react-bootstrap/Navbar';
import vector from '../images/Vector .png';


const Header = () =>{
        return(
          <section className=" align-items-cente bold text-white"> 
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
          <div className="fieldset mx-2">
            <div className="row">
                <div className="col-lg-6 mt-5 pt-5" >
                  <p className='text1'>Bonjour! C'est <span className='text-danger'>RAMA FALL</span> je suis developpeuse backend senior a bakeli</p>
                  <div className="row">
                  <div className="col-3">77 622 65 93</div>
                  <div className="col-3">ramafall49@gmail.com</div>
                  <div className="col-3">Yoff Layenne, Dakar</div>
                  <div className="col-3">Bakeli</div>
                </div>
                </div>
                <div className="col-lg-6">
                    <img src={photo} />
                </div>
                
            </div>
          </div>
          </div>
            
            {/* <img src={vector} /> */}
        </section>
    )
    
}

export default Header