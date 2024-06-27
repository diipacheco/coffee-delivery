import { styled } from 'styled-components';

import { boxStyles } from '../../styles';

export const Container = styled.div`
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
