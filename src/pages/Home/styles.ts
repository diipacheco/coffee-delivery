import { styled } from 'styled-components';

export const Intro = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 56px;

  padding: 5.75rem 0;
  margin: 0 auto;

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

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
  grid-row-gap: 20px;

  margin-top: 66px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: ${({ theme }) => theme.textSizes.texts.textM};

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`;
