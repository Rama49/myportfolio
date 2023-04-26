import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import capture1 from '../images/Capture1.JPG';
import capture2 from '../images/Capture2.JPG';
import capture3 from '../images/Capture3.JPG';



const Portfolio = () => 
{
      return (
        <section>
            <div className="row mb-5 justify-content-center">
                <div className="col-lg-3">
                <MDBCard>
    <MDBCardImage src={capture1} position='top' alt='...' className='carte'/>
    <MDBCardBody>
      <MDBCardTitle>Baldesse agro</MDBCardTitle>
      <MDBCardText>
        Dans ce projet nous avons crer un site vitrine qui consistait a exposer ces produits alimentaire et donc a l aider de liquider ces produits tres vites. 
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
                </div>
                  <div className="col-lg-3">
  <MDBCard>
    <MDBCardImage src={capture2} position='top' alt='...' className='carte' />
    <MDBCardBody>
      <MDBCardTitle>Gestion scolaire</MDBCardTitle>
      <MDBCardText>
        Dans ce projet nous avons creer un site scolaire et nous avons travailler sur la partie comptabilite pour controler les entrees et les sorties simultanements.
       </MDBCardText>
    </MDBCardBody>
  </MDBCard>
                </div>
                <div className="col-lg-3">
                <MDBCard>
    <MDBCardImage src={capture3} position='top' alt='...'  className='carte'/>
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        dans ce projet nous avons creer un systeme qui permettais de suivre l historiques des equipes de football de connaitre leurs nombres de match ceux qu ils ont gagne...
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
                </div>
            </div>
            <div className="row justify-content-center mb-5">
                <div className="col-lg-3">
                <MDBCard>
    <MDBCardImage src={capture1} position='top' alt='...'  className='carte'/>
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
                </div>
                  <div className="col-lg-3">
                <MDBCard>
    <MDBCardImage src={capture2} position='top' alt='...' className='carte' />
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
                </div>
                <div className="col-lg-3">
                <MDBCard>
    <MDBCardImage src={capture3} position='top' alt='...' className='carte' />
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
                </div>
                
            </div>
        </section>
);
}
export default Portfolio
