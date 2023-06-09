import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CreateProduct from "./view/CreateProduct";
import ListProduct from './view/ListProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailProduct from './view/DetailProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create-product' element={<CreateProduct />}/>
        <Route path='/list-product' element={<ListProduct />}/>
        <Route path='/detail/:id' element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;