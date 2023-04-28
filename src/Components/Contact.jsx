import Form from 'react-bootstrap/Form';
import photo from '../images/maPhoto.png';
import gradient from '../images/gradient.png';

const Contact = () => 
{
    return (
        <section className="section container-fluid">
            <h1 className='my-5'>Restons en contact</h1>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <Form>
                        <Form.Group className="mb-3  prenom" >
                            <Form.Label className='float-start'>Prenom</Form.Label>
                            <Form.Control type="text" className='prenom' />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label className='float-start b-0'>Nom</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control as="textarea" rows={13} placeholder='Votre Message'/>
                        </Form.Group>
                    </Form>
            <a className='mt-2 send text-decoration-none' href="http://wa.me/221776226593" >Envoyer</a>
                </div>
              <div className="col-lg-6 col-md-12 col-sm-12 "> 
                    <img src={photo} alt='photos' height={500} className='img-fluid'/>
                </div> 
            </div>
                <img src={gradient} className="gradient mt-5 img-fluid" />
        </section>
    )
}
export default Contact