import React from 'react';
import Table from 'react-bootstrap/Table';

function TheTable() {
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
          <th>Attributes</th>
          <th>Tags</th>
          <th>Published</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TheTable;