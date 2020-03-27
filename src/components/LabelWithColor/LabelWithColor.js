import React from 'react';
import { LabelWithColorContainer, BoxColor, Label } from './LabelWithColor.style';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components'; 

const LabelWithColor = ({ label, colorName, theme }) => {
  return (
    <LabelWithColorContainer>
      <BoxColor color={theme.color[colorName]} />
      <Label>{label}</Label>
    </LabelWithColorContainer>
  );
};

LabelWithColor.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string
};

LabelWithColor.defaultProps = {
  colorName: 'lightGreen'
};

export default withTheme(LabelWithColor);