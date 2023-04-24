import Form from 'react-bootstrap/Form';
import photo from '../images/maPhoto.png';

const Contact = () => 
{
    return (
        <section className="section">
            <h1>Restons en contact</h1>
            <div className="row">
                <div className="col-lg-6">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </div>
                <div className="col-lg-6">
                    <img src={photo} alt='photos' />
                </div>
            </div>
        </section>
    )
}
export default Contact