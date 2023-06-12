/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
import React, { useState, useEffect} from 'react';
import { InputTags } from 'react-bootstrap-tagsinput';
import 'react-bootstrap-tagsinput/dist/index.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';

import {useParams, useNavigate} from 'react-router-dom';
import TheBreadcrumb from './components/TheBreadcrumb';

function DetailProduct(): React.JSX.Element {
  const [tags, setTags] = useState<string[]>([])
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<number>(1.0)
  const [quantity, setQuantity] = useState<number>(1)
  const [type, setType] = useState<string>('')
  const [attr, setAttr] = useState<string>('')
  const [isPublished, setIsPublished] = useState<boolean>(false)
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const navigate = useNavigate();

  const handleKeyPress = (event: { key: string; preventDefault: () => void; }): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/products?id=${id}`,{
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
    }
    ).then(async(res) => {
      const response = await res.json();
      setName(response.product_name)
      setType(response.product_type)
      setDescription(response.product_description)
      setAttr(response.product_attributes)
      setPrice(response.product_price)
      setQuantity(response.product_quantity)
      setIsPublished(response.isPublished)
      setTags(response.product_tags.split(','))

    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setIsLoaded(true)
    })
  },[])

  const handleSubmit = (event: any): void => {
    event.preventDefault();
  }

  const handleUpdate = (): void => {
    setIsLoaded(false);
    const data = {
      'product_id': id,
      'product_name': name,
      'product_description': description,
      'product_price': price,
      'product_quantity': quantity,
      'product_type': type,
      'product_attributes': attr,
      'product_tags': tags.join(',')
    }

    fetch('http://localhost:3000/products',{
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    ).then((res) => {
      console.log(res);
      navigate('/list-product')

    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setIsLoaded(true)
    })
  }

  const handleDelete = (): void => {
    setIsLoaded(false);

    fetch(`http://localhost:3000/products?id=${id}`,{
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
    }
    ).then((res) => {
      console.log(res)
      navigate('/list-product')
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setIsLoaded(true)
    })
  }
  return (
    <Container style={{
      margin: '40px auto auto',
      border: '1px solid #e2e3e5',
      borderRadius: '10px',
      padding: '30px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <TheBreadcrumb listBreadcrumb={[{name: 'List', href: '/list-product'}, {name: 'Detail', href: `/detail/${id}`}]}/>
        <Badge className="mb-3" bg={isPublished ? 'success' : 'secondary'}>{isPublished ? 'Published' : 'Unpublished'}</Badge>
      </div>
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
        </Form.Group>
      
        {isLoaded ? <div>
          <Button variant="danger" type="button" onClick={handleDelete} className="m-1">Delete</Button>
          <Button variant="success" type="button" onClick={handleUpdate}>Update</Button>
        </div>: <Spinner animation="border" variant="secondary"/>}
      </Form>
    </Container>
    
  );
}

export default DetailProduct;