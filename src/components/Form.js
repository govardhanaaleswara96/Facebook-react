import './Form.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Form, Card ,Button} from 'react-bootstrap';
import { Fragment } from 'react';

const FacebookForm = ()=> {
  return (
    <Fragment>
    <Card className='card' style={{ width: '100%' }}>
    <Card.Body>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address or phone number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
            Log In
        </Button>
        </div>
        <div className='forgot'>
        <a href="">Forgotten password?</a>
        </div>
        <hr></hr>
        <div className='text-center'>
        <Button className='account' size="lg" >
            Create New Account
        </Button>
        </div>
    </Form>
    </Card.Body>
  </Card>
  <p className='text-center mt-3'><strong>Create a Page </strong>for a celebrity, brand or business.</p>
</Fragment>
  );
}

export default FacebookForm;