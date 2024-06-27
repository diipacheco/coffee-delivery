import { css, styled } from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: 72.5rem;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2.5rem;

  h3 {
    font-size: ${({ theme }) => theme.textSizes.titles.titleXS};
    color: ${({ theme }) => theme.colors.baseColors.baseSubtitle};
    margin-bottom: 0.938rem;
  }
`;

export const OrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 0.75rem;
`;

export const Heading = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    span {
      color: ${({ theme }) => theme.colors.baseColors.baseSubtitle};
    }

    p {
      font-size: ${({ theme }) => theme.textSizes.texts.textS};
    }
  }
`;

export const AddressHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors.productColors.yellowDark};
  }
`;

const boxStyles = css`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors.baseColors.baseCard};
  border-radius: 6px;
`;

export const FormContainer = styled.form`
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

export const PaymentSelection = styled.div`
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

export const CheckoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CheckoutInfo = styled.div`
  ${boxStyles}
  border-radius: 6px 36px;
`;

export const ProductsContainer = styled.ul`
  list-style: none;

  > li {
    display: flex;
    justify-content: space-between;
  }
`;

export const ProductItem = styled.div`
  display: flex;
  gap: 1rem;
  > img {
    width: 4rem;
    height: 4rem;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > span {
    font-size: ${({ theme }) => theme.textSizes.texts.textM};
    color: ${({ theme }) => theme.colors.baseColors.baseSubtitle};
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 0.375rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.baseColors.baseButton};

  font-size: ${({ theme }) => theme.textSizes.buttons.buttonM};
  color: ${({ theme }) => theme.colors.baseColors.baseText};
  font-weight: 400;
  transition: all 0.2s;
  text-transform: uppercase;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.baseColors.baseHover};
  }

  > svg {
    color: ${({ theme }) => theme.colors.productColors.purple};
  }
`;

export const PriceContainer = styled.aside`
  color: ${({ theme }) => theme.colors.baseColors.baseText};
  font-size: ${({ theme }) => theme.textSizes.texts.textM};
  font-weight: 700;
`;

export const Line = styled.span`
  display: block;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.baseColors.baseButton};
  margin: 1.5rem 0;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.75rem;
    background-color: ${({ theme }) => theme.colors.productColors.yellow};
    color: ${({ theme }) => theme.colors.baseColors.white};
    border-radius: 6px;
    text-transform: uppercase;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.productColors.yellowDark};
    }
  }
`;

export const TotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.baseColors.baseText};

    > span:first-child {
      font-size: ${({ theme }) => theme.textSizes.texts.textS};
    }

    > span:last-child {
      font-size: ${({ theme }) => theme.textSizes.texts.textM};
    }

    > strong {
      color: ${({ theme }) => theme.colors.baseColors.baseSubtitle};
      font-size: ${({ theme }) => theme.textSizes.texts.textL};
    }
  }
`;
