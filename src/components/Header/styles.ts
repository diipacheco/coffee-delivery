import { styled } from 'styled-components';

export const Container = styled.header`
  padding: 2rem 10rem;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  > img {
    height: 40px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LocaleIndicator = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 0.25rem;

  color: ${({ theme }) => theme.colors.productColors.purpleDark};
  background-color: ${({ theme }) => theme.colors.productColors.purpleLight};
  font-size: ${({ theme }) => theme.textSizes.texts.textS};
  border-radius: 6px;
`;

export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;

  background-color: ${({ theme }) => theme.colors.productColors.yellowLight};
  border-radius: 6px;
  position: relative;
`;

export const CartCounter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  top: 0px;
  right: 0px;
  transform: translate(40%, -40%);

  font-size: ${({ theme }) => theme.textSizes.texts.textS};
  font-weight: 700;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.baseColors.white};
  background-color: ${({ theme }) => theme.colors.productColors.yellowDark};
`;
