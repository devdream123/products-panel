import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import LabelWithColor from '../../components/LabelWithColor/LabelWithColor';

import { Heading, TopBarContainer } from './ChangeFlavourPage.style.js';
import HorizontalLine from '../../components/HorizontalLine/HorizontalLine';
import ProductTable from '../../components/ProductTable/ProductTable';
import * as data from '../../content/data';

const ChangeFlavourPage = () => {
  return (
    <div>
      <Heading>Change Flavour</Heading>
      <HorizontalLine />
      <TopBarContainer>
        <SearchBar />
        <LabelWithColor label="Recommended Flavours" colorName="lightGreen"/>
        <LabelWithColor label="Other Flavours" colorName="orange"/>
        <LabelWithColor label="Caution Flavours" colorName="lightRed"/>
      </TopBarContainer>
      <ProductTable data={data} />
    </div>
  );
};


export default ChangeFlavourPage;