import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import TheButton from "./view/components/TheButton";
import CreateProduct from "./view/CreateProduct";

const App = () => {
  return (
    <div>
      <CreateProduct />
      <TheButton />
    </div>
  )
}

export default App;