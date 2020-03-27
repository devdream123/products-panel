import styled from 'styled-components';

export const HorizontalLineStyled = styled.div`
  border: 0.5px solid ${({ theme }) => theme.color.lightGrey};
  margin-bottom: ${({ theme }) => theme.spacing.lg};;
`