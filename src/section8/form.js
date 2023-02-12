import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form className='row'>
      <Form.Group  controlId="formBasicEmail">
        <Form.Control className="col-md-8 non-block" type="email" placeholder="Enter email" />
        <Button className="col-md-4 non-block" variant="primary" type="submit">Submit</Button>

      </Form.Group>

    </Form>
  );
}

export default BasicExample;