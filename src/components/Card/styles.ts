import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 16rem;
  padding: 0 1.25rem 1.23rem;

  background-color: ${({ theme }) => theme.colors.baseColors.baseCard};
  border-radius: 6px 36px;
  text-align: center;

  > img {
    max-width: 7.5rem;
    max-height: 7.5rem;
    margin-top: -1.25rem;
    align-self: center;
  }
`;

export const Tags = styled.div`
  display: flex;
  margin-top: 0.75rem;
  gap: 0.25rem;
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
  background-color: ${({ theme }) => theme.colors.productColors.yellowLight};

  font-size: ${({ theme }) => theme.textSizes.tags.tag};
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.productColors.yellowDark};
`;

export const CoffeeInfo = styled.section`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: ${({ theme }) => theme.textSizes.titles.titleS};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.baseColors.baseSubtitle};
    margin-top: 1rem;
  }

  > p {
    margin-top: 0.5rem;
    font-size: ${({ theme }) => theme.textSizes.texts.textS};
    color: ${({ theme }) => theme.colors.baseColors.baseLabel};
  }
`;

export const Control = styled.div`
  width: 100%;
  max-width: 13rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;

  > span:first-child {
    font-size: ${({ theme }) => theme.textSizes.texts.textS};
    color: ${({ theme }) => theme.colors.baseColors.baseText};
  }

  > span:last-child {
    font-size: ${({ theme }) => theme.textSizes.titles.titleM};
    color: ${({ theme }) => theme.colors.baseColors.baseText};
    font-weight: 800;
  }
`;

export const Order = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  > input {
    max-width: 4.5rem;
  }

  > button {
    width: 2.375rem;
    height: 2.375rem;

    border-radius: 6px;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.productColors.purpleDark};
  }
`;
