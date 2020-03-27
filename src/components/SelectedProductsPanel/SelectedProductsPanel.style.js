import styled from 'styled-components';

export const SelectedProductsTable = styled.table`
  margin-top: ${({ theme }) => theme.spacing.md};
  border-spacing: 0;
  width: 30%;
`;

export const ProductTableHeader = styled.th`
  font-weight: bold;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md} `};
  background: ${({ theme }) => theme.color.lightGrey};
  border-right: 1px solid ${({ theme }) => theme.color.lighterGrey};
`;

export const SelectedProductContainer = styled.div`
  display:flex;
`;

export const ImgStyled = styled.img`
  width: 60px;
  height: 80px;
`;

export const ProductName = styled.p`
  font-weight: bold;
`;

export const ProductCode = styled.p`
  color: ${({ theme }) => theme.color.lightGrey};
`;

export const ProductInfoContainer = styled.p`
  display:flex;
  justify-content: space-between;
`;
export const ProductLabel= styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const ProductInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;