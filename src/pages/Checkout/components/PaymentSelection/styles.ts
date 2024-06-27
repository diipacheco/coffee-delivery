import { styled } from 'styled-components';

import { Heading, boxStyles } from '../../styles';

export const Container = styled.div`
  ${boxStyles}
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PaymentSelectionHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors.productColors.purple};
  }
`;

export const SelectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;
