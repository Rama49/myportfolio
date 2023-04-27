import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText
  } from 'mdb-react-ui-kit';
  import projet1 from '../images/projet1.png'
  import projet2 from '../images/projet2.png'
  import projet3 from '../images/projet3.png'
  import projet4 from '../images/projet4.png'


const Expert = () =>
{
    return(
        <section className="expert container-fluid">
               <h1 className='my-5'>Mes Experiences</h1>
              
               <div className='mb-5'>
                    <MDBCard className='start bg-white'>
                        <MDBCardBody>
                        <MDBCardTitle >Developpeuse junior En formation</MDBCardTitle>
                        <MDBCardText>
                             Formation en raison de 28h/s.ce cursus comprend HTML, CSS, BOOTSTRAP, Algorithmes, Javascript, React JS, git, github, enseigner par coach toujours en activite. Cette formation m'a permis de valider ces enseignements par la pratique de plus d'une dizaine de projet 
                        </MDBCardText>
                        </MDBCardBody>
                   </MDBCard>
               </div>
               <div className="row bg-dark mx-3 text-white">
                    <div className="col-lg-3">
                       <img src={projet1} />
                       <p>
                       10 projects
                       </p>
                    </div>
                    <div className="col-lg-3">
                         <img src={projet2} />
                         <p>
                       20 algorithmes
                       </p>
                    </div>
                    <div className="col-lg-3">
                          <img src={projet3} />
                          <p>
                       20 console.log();
                       </p>
                    </div>
                    <div className="col-lg-3">
                            <img src={projet4} />
                            <p>
                            
                       16 borders: solid red 1px;
                            </p>
                    </div>
               </div>
        </section>
    )
}
export default Expert