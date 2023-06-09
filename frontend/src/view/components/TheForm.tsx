import React, { useState } from 'react';
import { InputTags } from 'react-bootstrap-tagsinput';
import 'react-bootstrap-tagsinput/dist/index.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function TheForm() {
  const [tags, setTags] = useState<string[]>([])
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<number>(1.0)
  const [quantity, setQuantity] = useState<number>(1)
  const [type, setType] = useState<string>('')
  const [attr, setAttr] = useState<string>('')

  const handleKeyPress = (event: { key: string; preventDefault: () => void; }) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      "product_name": name,
      "product_description": description,
      "product_price": price,
      "product_quantity": quantity,
      "product_type": type,
      "product_attributes": attr,
      "product_tags": tags.join(",")
    }
    console.log(data)
    fetch("http://localhost:3000/products",{
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
      }
    ).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className='form-input' style={{
      width: '90%',
      margin: '40px auto 10px',
      border: '1px solid #e2e3e5',
      borderRadius: '50px',
      padding: '40px'
    }}>
      <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Product name" value={name} onChange={e => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" placeholder="Product type" value={type} onChange={e => setType(e.target.value)}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" step="0.1" placeholder="1.0" min="1.0" value={price} onChange={e => setPrice(Number(e.target.value))} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="1" min="1" value={quantity} onChange={e => setQuantity(Number(e.target.value))}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Product description' value={description} onChange={e => setDescription(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Attributes</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Key: Value' value={attr} onChange={e => setAttr(e.target.value)}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Tags</Form.Label>
        <InputTags placeholder={tags.length > 0 ? '' : 'tag'} values={tags} onTags={(value) => setTags(value.values)} onKeyPress={handleKeyPress}/>
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
        {tags.map((item, index) => (
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