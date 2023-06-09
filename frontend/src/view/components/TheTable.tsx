import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

type TableProps = {
  list: any[]
};

function TheTable({list} : TableProps) {
  console.log(list)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          {/* <th>Attributes</th> */}
          <th>Tags</th>
          <th>Published</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          list.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.product_name}</td>
              <td>{item.product_type}</td>
              <td>{item.product_description}</td>
              <td>{item.product_price}</td>
              <td>{item.product_quantity}</td>
              {/* <td>{item.product_attributes}</td> */}
              <td>{item.product_tags}</td>
              <td>{item.isPublished}</td>
              <td><Link to={`/detail/${item.id}`}>detail</Link></td>
            </tr>
          ))
        }
        
      </tbody>
    </Table>
  );
}
export default TheTable;