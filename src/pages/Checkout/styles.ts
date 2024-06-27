import { css, styled } from 'styled-components';

export const boxStyles = css`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors.baseColors.baseCard};
  border-radius: 6px;
`;

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

export const CheckoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
