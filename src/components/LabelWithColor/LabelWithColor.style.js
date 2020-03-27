import styled from 'styled-components';

export const BoxColor = styled.div`
  width: 20px;
  height:20px;
  border-radius: 5px;
  background: ${props => props.color};
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

export const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.grey};
`;

export const LabelWithColorContainer = styled.div`
  display:flex;
`;