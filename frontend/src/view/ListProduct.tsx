import React from "react";
import TheNavbar from "./components/TheNavbar";
import TheTable from "./components/TheTable";
import TheBreadcrumb from "./components/TheBreadcrumb";

function ListProduct() {
  return (
    <div>
      <TheNavbar></TheNavbar>
      <TheBreadcrumb />
      <TheTable />
    </div>
  );
}

export default ListProduct;