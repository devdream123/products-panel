import React from 'react';
import { ProductTable, ProductTableHeader, ProductTableRow, ProductTableData } from './ListOfProducts.style';

const ListOfProducts = ({ productCapacity, productUpdateData }) => {
  return (
    <ProductTable>
      <ProductTableRow>
        <ProductTableHeader>Product</ProductTableHeader>
        <ProductTableHeader>Price</ProductTableHeader>
        <ProductTableHeader>Vends</ProductTableHeader>
        <ProductTableHeader>Revenue</ProductTableHeader>
        <ProductTableHeader>Net Gain</ProductTableHeader>
      </ProductTableRow>
      {productUpdateData.map(prod=> {
        const revenue = prod.average_sales * prod.price;
        return (
          <tr key={prod.product_code}>
            <ProductTableData>{prod.product_code}</ProductTableData>
            <ProductTableData>${prod.price}</ProductTableData>
            <ProductTableData>${prod.average_sales.toFixed(2)}</ProductTableData>
            <ProductTableData>${revenue.toFixed(2)}</ProductTableData>
          </tr>
        );
      })} 
  </ProductTable>
  );
};

export default ListOfProducts;