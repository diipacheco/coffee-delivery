import { styled } from 'styled-components';

import { Heading, boxStyles } from '../../styles';

export const AddressHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors.productColors.yellowDark};
  }
`;

export const FormContainer = styled.div`
  ${boxStyles}
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 1rem 0.75rem;
  margin-top: 2rem;
`;
