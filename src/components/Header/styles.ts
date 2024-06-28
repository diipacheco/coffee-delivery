import { styled, css } from 'styled-components';

import { Link } from 'react-router-dom';

export const defaultHeaderCss = css`
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 2rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const fixedHeaderCss = css`
  padding: 2rem 24.6rem;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.baseColors.baseCard};
`;

export const Container = styled.header<{ $isFixed: boolean }>`
  ${({ $isFixed }) => ($isFixed ? fixedHeaderCss : defaultHeaderCss)};
`;

export const FixedHeader = styled(Container)``;

export const LogoContainer = styled(Link)`
  > img {
    height: 2.5rem;
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

export const Cart = styled(Link)`
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
  width: 1.25rem;
  height: 1.25rem;
  top: 0;
  right: 0;
  transform: translate(40%, -40%);

  font-size: ${({ theme }) => theme.textSizes.texts.textS};
  font-weight: 700;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.baseColors.white};
  background-color: ${({ theme }) => theme.colors.productColors.yellowDark};
`;
