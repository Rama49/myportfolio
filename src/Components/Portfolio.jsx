// import React from 'react';
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
import capture4 from '../images/Capture4.JPG';
import capture5 from '../images/capture5.JPG';
import capture6 from '../images/Capture6.JPG';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Portfolio = () => 
{
  useEffect(() => {
    AOS.init();
  }, [])
      return (
        <section className='expert container-fluid'>
          <h1 className='mb-5'>Portfolio</h1>
            <div className="row mb-5 justify-content-center">
                <div className="col-lg-3 meto">
                <div data-aos="flip-right">
                <MDBCard className='mb-2'>
                  <MDBCardImage src={capture4} position='top' alt='...'  className='carte'/>
                  <MDBCardBody>
                    <MDBCardTitle>meteo</MDBCardTitle>
                    <MDBCardText>
                    Dans ce projet nous avons travailler sur les apis meteo enfin de savoir la temperature des pays et en pouvant changer de ville souhaite si c est souhaite.
                    </MDBCardText>
                    <button href='https://github.com/Rama49/meteo.git' type='button' className='border-0 bg-transparent' ><span className=" bord p-3 ">voir le projet</span></button>
                  </MDBCardBody>
                </MDBCard>
                </div>
  <div />
                </div>
                  <div className="col-lg-3 meto">
                  <div data-aos="flip-right">
                  <MDBCard>
    <MDBCardImage src={capture2} position='top' alt='...' className='carte' />
    <MDBCardBody>
      <MDBCardTitle>Gestion scolaire</MDBCardTitle>
      <MDBCardText>
        Dans ce projet nous avons creer un site scolaire et nous avons travailler sur la partie comptabilite pour controler les entrees et les sorties simultanements.
       </MDBCardText>
       <button href='https://gitlab.com/p4490/finalprojet.git' type='button' className='border-0 bg-transparent' ><span className=" bord p-3 ">voir le projet</span></button>
    </MDBCardBody>
  </MDBCard>
                  </div>
                </div>
                <div className="col-lg-3 meto">
                <div data-aos="flip-right">
                <MDBCard>
                <MDBCardImage src={capture3} position='top' alt='...'  className='carte'/>
                
    <MDBCardBody>
      <MDBCardTitle>mini projet foot</MDBCardTitle>
      <MDBCardText>
        dans ce projet nous avons creer un systeme qui permettais de suivre l historiques des equipes de football de connaitre leurs nombres de match ceux qu ils ont gagne...
      </MDBCardText>
      <button href='https://github.com/Rama49/miniPojet2js.git' type='button' className='border-0 bg-transparent' ><span className=" bord p-3 ">voir le projet</span></button>
    </MDBCardBody>
  </MDBCard>
  </div>
                </div>
            </div>
            <div className="row justify-content-center mb-5">
                <div className="col-lg-3 meto">
                <div data-aos="flip-right">
                <MDBCard>
    <MDBCardImage src={capture1} position='top' alt='...' className='carte'/>
    <MDBCardBody>
      <MDBCardTitle>Baldesse agro</MDBCardTitle>
      <MDBCardText>
        Dans ce projet nous avons crer un site vitrine qui consistait a exposer ces produits alimentaire et donc a l aider de liquider ces produits tres vites. 
      </MDBCardText>
      <button href='https://github.com/Rama49/baldesseagro.git' type='button' className='border-0 bg-transparent' ><span className=" bord p-3 ">voir le projet</span></button>
    </MDBCardBody>
  </MDBCard>
                </div>
                </div>
                  <div className="col-lg-3 meto">
                  <div data-aos="flip-right">
                  <MDBCard>
    <MDBCardImage src={capture5} position='top' alt='...' className='carte' />
    <MDBCardBody>
      <MDBCardTitle>Dictionnaire</MDBCardTitle>
      <MDBCardText>
        l idee de ce projet consistait a creer un api dictionnaire pour pouvoir rechercher des mots voir ces definition ... des mots
      </MDBCardText>
    <button href='https://github.com/Rama49/dictionnaire.git' className='border-0 bg-transparent' type='button'><span className=" bord p-3 ">voir le projet</span></button>
    </MDBCardBody>
  </MDBCard>
                  </div>
                </div>
                <div className="col-lg-3 meto">
                <div data-aos="flip-right">
                <MDBCard>
    <MDBCardImage src={capture6} position='top' alt='...' className='carte' />
    <MDBCardBody>
      <MDBCardTitle>Authentification</MDBCardTitle>
      <MDBCardText>
       dans ce projet nous avons faire un systeme d authentification qui permet de vous connecter et de deconnecter en vous dirigeant sur le status choisit
      </MDBCardText>
      <button href='https://github.com/Rama49/dictionnaire.git' className='border-0 bg-transparent' type='button'><span className=" bord p-3 ">voir le projet</span></button>
    </MDBCardBody>
  </MDBCard>
                </div>
                </div>
                
            </div>
        </section>
);
}
export default Portfolio
