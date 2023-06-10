import React, { useEffect, useState } from "react";
import TheNavbar from "./components/TheNavbar";
import TheTable from "./components/TheTable";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

function ListProduct() {
  const [listProducts, setListProducts] = useState<any[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    fetch("http://localhost:3000/products/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async(res) => {
      const response = await res.json()
      setListProducts(response)
      setIsLoaded(true);
    }).catch((err) => {
      console.log(err)
      setIsLoaded(true);
    })
  },[])
  return (
    <Container>
      {isLoaded ? <TheTable list={listProducts} /> : <Spinner animation="border" variant="secondary"/>}
    </Container>
  );
}

export default ListProduct;