import React from 'react';
import { 
  SelectedProductsTable,
  ProductTableHeader,
  SelectedProductContainer,
  ImgStyled,
  ProductName,
  ProductCode,
  ProductInfoContainer,
  ProductLabel,
  ProductInfo } from './SelectedProductsPanel.style';

const SelectedProductsPanel = ({ selectedProducts }) => {
  const imgUrl = 'https://cdn.vendinganalytics.com/reyes-ccb/tb/';
  if(!selectedProducts && selectedProducts.length < 1){
    return null;
  }
  return (
    <SelectedProductsTable>
      <tr>
        <ProductTableHeader>Selected Products</ProductTableHeader>
      </tr>
      <tr>
        {selectedProducts.map((prod) => {
          const revennue = prod.average_sales * prod.price;
         return( 
          <SelectedProductContainer key={prod.product_code}>
            <ImgStyled src={`${imgUrl}/${prod.product_code}.png`} alt={prod.product_name} />
            <td>
              <ProductName>{prod.product_name}</ProductName>
              <ProductCode>{prod.product_code}</ProductCode>
              <ProductInfoContainer>
                <ProductLabel>Price:</ProductLabel>
                <ProductInfo>${prod.price}</ProductInfo>
              </ProductInfoContainer>
              <ProductInfoContainer>
                <ProductLabel>Vends:</ProductLabel>
                <ProductInfo>${prod.average_sales.toFixed(2)}</ProductInfo>
              </ProductInfoContainer>
              <ProductInfoContainer>
                <ProductLabel>Revenue:</ProductLabel>
                <ProductInfo>${revennue.toFixed(2)}</ProductInfo>
              </ProductInfoContainer>
            </td>
          </SelectedProductContainer>
         );
        })}
      </tr>
    </SelectedProductsTable>
   
  );
};

export default SelectedProductsPanel;