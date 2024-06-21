import { styled } from 'styled-components';

export const Intro = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3.5rem;

  padding: 5.75rem 0;
  margin: 0 auto;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > h1 {
      font-size: ${({ theme }) => theme.textSizes.titles.titleXL};
      font-weight: 800;
      line-height: 130%;
      color: ${({ theme }) => theme.colors.baseColors.baseTitle};
    }

    > p {
      font-size: ${({ theme }) => theme.textSizes.texts.textL};
      line-height: 130%;
      color: ${({ theme }) => theme.colors.baseColors.baseSubtitle};
    }
  }
`;

export const IntroInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  margin-top: 4.125rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: ${({ theme }) => theme.textSizes.texts.textM};

    svg {
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
`;

export const ProductsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  max-width: 72.5rem;
  padding: 2rem 0 9.375rem;

  > h2 {
    font-size: ${({ theme }) => theme.textSizes.titles.titleL};
    font-weight: 800;
    color: ${({ theme }) => theme.colors.baseColors.baseSubtitle};
  }

  > ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
    list-style: none;
  }
`;
