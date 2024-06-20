import { MapPin, ShoppingCart } from 'phosphor-react';

import Logo from '../../assets/Logo.svg';

import { Cart, CartContainer, Container, LocaleIndicator, LogoContainer, CartCounter } from './styles';

export function Header() {
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="" />
      </LogoContainer>
      <CartContainer>
        <LocaleIndicator>
          <MapPin weight="fill" color="#8047F8" size={22} />
          São Paulo, SP
        </LocaleIndicator>
        <Cart>
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
          <CartCounter>3</CartCounter>
        </Cart>
      </CartContainer>
    </Container>
  );
}
