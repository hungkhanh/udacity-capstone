import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CreateProduct from './view/CreateProduct';
import ListProduct from './view/ListProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailProduct from './view/DetailProduct';
import TheNavbar from './view/components/TheNavbar';
import { Container } from 'react-bootstrap';

const App = (): React.JSX.Element => {
  return (
    <>
    <div style={{
      minHeight: '100vh',
      backgroundSize: '200px 200px',
    }}>
      <BrowserRouter>
        <TheNavbar />
        <Routes>
          <Route path='/create-product' element={<CreateProduct />}/>
          <Route path='/list-product' element={<ListProduct />}/>
          <Route path='/detail/:id' element={<DetailProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
    <footer style={{
      backgroundColor: 'rgb(243 243 243)',
      height: '50px',
      width: '100%'
    }}>
      <Container style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      </Container>
    </footer>
</>
  )
}

export default App;