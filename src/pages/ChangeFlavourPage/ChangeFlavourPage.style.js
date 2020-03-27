import styled from 'styled-components';


export const Heading = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg}; 
  padding: 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.color.grey};
`;

export const TopBarContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.md};
  display:flex;
  align-items: center;
  justify-content: space-between;
`;