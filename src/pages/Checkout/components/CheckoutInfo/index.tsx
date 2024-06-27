import { Fragment } from 'react';

import { useCartContext } from '../../../../context/Cart';

import {
  Container,
  Line,
  PriceContainer,
  ProductInfo,
  ProductItem,
  ProductsContainer,
  RemoveButton,
  TotalContainer,
  TotalInfo,
} from './styles';
import { QuantityInput } from '../../../../components/Form/QuantityInput';
import { Trash } from 'phosphor-react';

export function CheckoutInfo() {
  const {
    addedItems,
    increaseAddedItemQuantity,
    decreaseAddedItemQuantity,
    removeCoffeeFromCart,
  } = useCartContext();

  function formatPrice(price: number) {
    const fixedPrice = price.toFixed(2);
    return fixedPrice.toString().replace('.', ',');
  }

  const subtotal = addedItems?.reduce(
    (subTotal, item) => subTotal + item.subtotal,
    0,
  );

  const total = subtotal + 3.5;
  return (
    <Container>
      <ProductsContainer>
        {addedItems.map(item => (
          <Fragment key={item.id}>
            <li>
              <ProductItem>
                <img src={item.image} alt="Café" />
                <ProductInfo>
                  <span>{item.title}</span>
                  <div>
                    <QuantityInput
                      quantity={item.quantity}
                      increaseQuantity={() =>
                        increaseAddedItemQuantity(item.id)
                      }
                      decreaseQuantity={() => {
                        if (item.quantity > 1) {
                          decreaseAddedItemQuantity(item.id);
                        } else {
                          removeCoffeeFromCart(item.id);
                        }
                      }}
                    />
                    <RemoveButton
                      type="button"
                      onClick={() => removeCoffeeFromCart(item.id)}
                    >
                      <Trash size={16} />
                      remover
                    </RemoveButton>
                  </div>
                </ProductInfo>
              </ProductItem>
              <PriceContainer>
                <span>R$ {formatPrice(item.subtotal)}</span>
              </PriceContainer>
            </li>
            <Line />
          </Fragment>
        ))}
        <TotalContainer>
          <TotalInfo>
            <div>
              <span>Total de itens</span>
              <span>R$ {formatPrice(subtotal)}</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>R$ {formatPrice(total)}</strong>
            </div>
          </TotalInfo>
          <button type="submit">Confirmar Pedido</button>
        </TotalContainer>
      </ProductsContainer>
    </Container>
  );
}
