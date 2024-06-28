import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';

import { useCartContext } from '../../context/Cart';
import Delivery from '../../assets/images/delivery.svg';

import {
  Container,
  SuccessHeading,
  OrderInfoContainer,
  Info,
  GradientContainer,
} from './styles';

export function Success() {
  const { checkoutOrder } = useCartContext();
  const theme = useTheme();

  const {
    address: { street, number, neighborhood, city, state },
    paymentMethod,
  } = checkoutOrder;

  return (
    <Container>
      <SuccessHeading>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeading>

      <OrderInfoContainer>
        <GradientContainer>
          <Info>
            <div>
              <MapPin
                color={theme.colors.baseColors.white}
                style={{ backgroundColor: theme.colors.productColors.purple }}
                size={32}
              />
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {street}, {number}
                  </strong>
                </p>
                <p>
                  {city} - {neighborhood}, {state}
                </p>
              </div>
            </div>

            <div>
              <Timer
                color={theme.colors.baseColors.white}
                style={{ backgroundColor: theme.colors.productColors.yellow }}
                size={32}
              />
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min</strong>
                  <strong>-</strong>
                  <strong>30 min</strong>
                </p>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={theme.colors.baseColors.white}
                style={{
                  backgroundColor: theme.colors.productColors.yellowDark,
                }}
                size={32}
              />
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  {(paymentMethod === 'credit' && (
                    <strong>Cartão de Crédito</strong>
                  )) ||
                    (paymentMethod === 'debito' && (
                      <strong>Cartão de Débito</strong>
                    )) ||
                    (paymentMethod === 'cash' && <strong>Dinheiro</strong>)}
                </p>
              </div>
            </div>
          </Info>
        </GradientContainer>
        <img src={Delivery} alt="Pedido concluído" />
      </OrderInfoContainer>
    </Container>
  );
}
