import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import capture1 from '../images/Capture1.JPG'



const Portfolio = () => 
{
      return (
        <section>
            <div className="row">
                <div className="col-lg-4">
                <MDBCard>
    <MDBCardImage src={capture1} position='top' alt='...' />
    <MDBCardBody>
      <MDBCardTitle>Baldesse agro</MDBCardTitle>
      <MDBCardText>
        baldesse agro etait un projet reel qui consistait a resoudre les problemes de l entrepreneur.
        Dans ce projet nous avons crer un site vitrine qui consistait a exposer ces produits alimentaire et donc a l aider de liquider ces produits tres vites. 
      </MDBCardText>
      <MDBBtn href='#'>Button</MDBBtn>
    </MDBCardBody>
  </MDBCard>
                </div>
                  <div className="col-lg-4">
  <MDBCard>
    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
    <MDBCardBody>
      <MDBCardTitle>Gestion scolaire</MDBCardTitle>
      <MDBCardText>
        Dans ce projet la solution adequate etais d aider les administratives scolaire a bien gerer leur etablissements numeriquement c est  a dire avec la creation d un site.
        avec ce projet nous avons travailler sur la partie comptabilite ou le comptable de l'administration  serait en mesure de controle ces entrees et ces sorties simultanements.
       </MDBCardText>
    </MDBCardBody>
  </MDBCard>
                </div>
                <div className="col-lg-4">
                <MDBCard>
    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        dans ce projet nous avons creer un syateme de crud avec une base donne qui permettais de suivre l historiques des equipes de football de connaitre leurs nombres de match ceux ceux qu il ont gagne et perdu
      </MDBCardText>
      <MDBBtn href='#'>Button</MDBBtn>
    </MDBCardBody>
  </MDBCard>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                <MDBCard>
    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </MDBCardText>
      <MDBBtn href='#'>Button</MDBBtn>
    </MDBCardBody>
  </MDBCard>
                </div>
                  <div className="col-lg-4">
                <MDBCard>
    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </MDBCardText>
      <MDBBtn href='#'>Button</MDBBtn>
    </MDBCardBody>
  </MDBCard>
                </div>
                <div className="col-lg-4">
                <MDBCard>
    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </MDBCardText>
      <MDBBtn href='#'>Button</MDBBtn>
    </MDBCardBody>
  </MDBCard>
                </div>
                
            </div>
        </section>
);
}
export default Portfolio
