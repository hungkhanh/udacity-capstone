import React from 'react';
import TheForm from './components/TheForm';
import Container from 'react-bootstrap/Container';

function CreateProduct(): React.JSX.Element {
  return (
    <div>
      <Container>
        <TheForm />
      </Container>
    </div>
  );
}

export default CreateProduct;