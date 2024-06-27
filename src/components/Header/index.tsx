import { useTheme } from 'styled-components';
import { MapPin, ShoppingCart } from 'phosphor-react';

import Logo from '../../assets/Logo.svg';

import { Cart, CartContainer, Container, LocaleIndicator, LogoContainer, CartCounter } from './styles';
import { useCartContext } from '../../context/Cart';

export function Header() {
  const { addedItems } = useCartContext();
  const theme = useTheme();
  return (
    <Container>
      <LogoContainer to="/">
        <img src={Logo} alt="" />
      </LogoContainer>
      <CartContainer>
        <LocaleIndicator>
          <MapPin weight="fill" color={theme.colors.productColors.purple} size={22} />
          São Paulo, SP
        </LocaleIndicator>
        <Cart to="/checkout">
          <ShoppingCart size={22} color={theme.colors.productColors.yellowDark} weight="fill" />
          {addedItems.length >= 1 && <CartCounter>{addedItems.length}</CartCounter>}
        </Cart>
      </CartContainer>
    </Container>
  );
}
