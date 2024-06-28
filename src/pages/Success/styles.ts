import { styled } from 'styled-components';

export const Container = styled.section`
  padding: 5rem 0;
`;

export const SuccessHeading = styled.div`
  > h1 {
    color: ${({ theme }) => theme.colors.productColors.yellowDark};
    font-size: ${({ theme }) => theme.textSizes.titles.titleL};
  }

  > p {
    font-size: ${({ theme }) => theme.textSizes.texts.textL};
    color: ${({ theme }) => theme.colors.baseColors.baseSubtitle};
  }
`;

export const OrderInfoContainer = styled.div`
  display: flex;

  gap: 6.375rem;
  margin-top: 2.5rem;

  > img {
    margin-bottom: 0.813rem;
  }
`;

export const GradientContainer = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;
  height: 16.895rem;
  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.productColors.yellow}, ${theme.colors.productColors.purple})`};
`;

export const Info = styled.div`
  background-color: ${({ theme }) => theme.colors.baseColors.white};
  padding: 2.5rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > svg {
      padding: 0.5rem;
      border-radius: 999px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`;
