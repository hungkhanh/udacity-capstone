import React , { useState } from 'react';
import { InputTags } from 'react-bootstrap-tagsinput';
import 'react-bootstrap-tagsinput/dist/index.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function TheForm() {
  const [state, setState] = useState<string[]>([])
  const handleKeyPress = (event: { key: string; preventDefault: () => void; }) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };
  return (
    <div className='form-input' style={{
      width: '90%',
      margin: '40px auto 10px',
      border: '1px solid #e2e3e5',
      borderRadius: '50px',
      padding: '40px'
    }}>
      <Form onSubmit={e => e.preventDefault()}>
      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Product name" />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" placeholder="Product type" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" step="0.1" placeholder="1.0" min="1.0" defaultValue={1.0} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="1" min="1" defaultValue={1} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Product description' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Attributes</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Key: Value' />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Tags</Form.Label>
        <InputTags placeholder={state.length > 0 ? '' : 'tag'} values={state} onTags={(value) => setState(value.values)} onKeyPress={handleKeyPress}/>
        {/* <button
          className='btn btn-outline-secondary'
          type='button'
          data-testid='button-clearAll'
          onClick={() => {
            setState([])
          }}
        >
          Delete all
        </button> */}
      <ol hidden>
        {state.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ol>
      </Form.Group>
      
        
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
    </div>
    
  );
}

export default TheForm;