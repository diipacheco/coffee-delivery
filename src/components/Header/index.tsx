import { useTheme } from 'styled-components';
import { MapPin, ShoppingCart } from 'phosphor-react';

import Logo from '../../assets/Logo.svg';

import { Cart, CartContainer, Container, LocaleIndicator, LogoContainer, CartCounter } from './styles';

export function Header() {
  const theme = useTheme();
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="" />
      </LogoContainer>
      <CartContainer>
        <LocaleIndicator>
          <MapPin weight="fill" color={theme.colors.productColors.purple} size={22} />
          São Paulo, SP
        </LocaleIndicator>
        <Cart>
          <ShoppingCart size={22} color={theme.colors.productColors.yellowDark} weight="fill" />
          <CartCounter>3</CartCounter>
        </Cart>
      </CartContainer>
    </Container>
  );
}
