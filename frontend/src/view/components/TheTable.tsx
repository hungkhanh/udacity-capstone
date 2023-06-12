/* eslint-disable no-undef */
import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';


type TableProps = {
  list: any[]
};

function TheTable({list} : TableProps): React.JSX.Element {
  const hanldePulished = (item : any) => () =>{
    if(item.isPublished){
      item.isPublished = false;
      fetch(`http://localhost:3000/products/unpublished?id=${item.id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      ).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }else{
      item.isPublished = true;

      fetch(`http://localhost:3000/products/published?id=${item.id}`,{
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
        },
      }
      ).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
  return (
    <Table striped bordered hover style={{margin: '40px auto 10px', zIndex: '10'}}>
      <thead>
        <tr>
          <th style={{textAlign: 'center'}}>#</th>
          <th>Name</th>
          <th style={{textAlign: 'center'}}>Type</th>
          <th>Description</th>
          <th style={{textAlign: 'center'}}>Price</th>
          <th style={{textAlign: 'center'}}>Quantity</th>
          {/* <th>Attributes</th> */}
          <th>Tags</th>
          <th style={{textAlign: 'center'}}>Published</th>
          <th style={{textAlign: 'center'}}>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          list.sort((a, b) => a.id - b.id).map((item, index) => (
            <tr key={index}>
              <td style={{textAlign: 'center'}}>{index}</td>
              <td>{item.product_name}</td>
              <td style={{textAlign: 'center'}}>{item.product_type}</td>
              <td>{item.product_description}</td>
              <td style={{textAlign: 'center'}}>{item.product_price}</td>
              <td style={{textAlign: 'center'}}>{item.product_quantity}</td>
              {/* <td>{item.product_attributes}</td> */}
              <td>{item.product_tags.split(',').map((el: any) => (
                <>
                  <Badge bg={'secondary'}>{el}</Badge> &nbsp;
                </>
              ))}</td>
              <td style={{textAlign: 'center'}}><input onClick={hanldePulished(item)} type="checkbox" defaultChecked={item.isPublished} data-toggle="toggle" readOnly={true} /></td>
              <td style={{textAlign: 'center'}}><Link to={`/detail/${item.id}`}>detail</Link></td>
            </tr>
          ))
        }
        
      </tbody>
    </Table>
  );
}
export default TheTable;