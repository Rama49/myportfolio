import Form from 'react-bootstrap/Form';
import photo from '../images/maPhoto.png';
import gradient from '../images/gradient.png';

const Contact = () => 
{
    return (
        <section className="section">
            <h1>Restons en contact</h1>
            <div className="row">
                <div className="col-lg-6">
                    <Form>
                        <Form.Group className="mb-3 prenom" >
                            <Form.Label>Prenom</Form.Label>
                            <Form.Control type="text" className='prenom' />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control as="textarea" rows={13} placeholder='Votre Message'/>
                        </Form.Group>
                    </Form>
            <button type='button' className='mt-2 send'>Envoyer</button>
                </div>
                <div className="col-lg-5 foto">
                    <img src={photo} alt='photos' height={500}/>
                </div>
            </div>
                <img src={gradient} className="gradient" />
        </section>
    )
}
export default Contact