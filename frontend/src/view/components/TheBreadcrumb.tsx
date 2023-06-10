import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

interface BreadcrumbProps {
  listBreadcrumb  : any[];
}
function TheBreadcrumb({listBreadcrumb} : BreadcrumbProps) {
  return (
    <Breadcrumb>
    {
      listBreadcrumb.map((item : any, index: number) => (
        <Breadcrumb.Item href={item.href} active={index === (listBreadcrumb.length-1)}>{item.name}</Breadcrumb.Item>
      ))
    }
    </Breadcrumb>
  );
}

export default TheBreadcrumb;