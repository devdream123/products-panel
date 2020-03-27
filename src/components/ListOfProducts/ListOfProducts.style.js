import styled from 'styled-components';

export const ProductTable = styled.table`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.md};;
  border-spacing: 0;
`;
export const ProductTableRow = styled.tr`
  background: ${({ theme }) => theme.color.lightGrey};
`;

export const ProductTableHeader = styled.th`
  font-weight: bold;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md} `};
  background: ${({ theme }) => theme.color.lightGrey};
  border: 1px solid $${({ theme }) => theme.color.lightGrey};
  &:first-child{
    width: 50%;
  }
`;

export const ProductTableData = styled.td`
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
  &:first-child {
    text-align: left;
    border-left: 8px solid ${({ theme }) => theme.color.lightGreen};
  }
`;