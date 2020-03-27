import React from 'react';
import SelectedProductsPanel from '../SelectedProductsPanel/SelectedProductsPanel';
import ListOfProducts from '../ListOfProducts/ListOfProducts';
import { ProductTableStyled } from './ProductTable.style.js';
import PropTypes from 'prop-types';

const ProductTable = ({ data }) => {
  const { currentProducts, productCapacity, productUpdateData  } = data;
  return (
    <ProductTableStyled>
      <SelectedProductsPanel selectedProducts={currentProducts}/> 
      <ListOfProducts productUpdateData={productUpdateData} productCapacity={productCapacity} />
    </ProductTableStyled>
  );
};

ProductTable.propTypes = {
  data: PropTypes.node
};

ProductTable.defaultProps = {
  data: {}
};


export default ProductTable;