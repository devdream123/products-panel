import styled from 'styled-components'

export const SearchBarField= styled.input`
  width: 150px;
  padding: ${({ theme }) => theme.spacing.sm};;
  border: 1px solid grey;
  border-radius:5px;
  outline: none;
`;