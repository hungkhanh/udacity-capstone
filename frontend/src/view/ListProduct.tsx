import React, { useEffect, useState } from "react";
import TheNavbar from "./components/TheNavbar";
import TheTable from "./components/TheTable";

function ListProduct() {
  const [listProducts, setListProducts] = useState<any[]>([])
  console.log("render")
  
  useEffect(() => {
    fetch("http://localhost:3000/products/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async(res) => {
      const response = await res.json()
      setListProducts(response)
    }).catch((err) => {
      console.log(err)
    })
  },[])
  return (
    <div>
      <TheNavbar></TheNavbar>
      <TheTable list={listProducts} />
    </div>
  );
}

export default ListProduct;