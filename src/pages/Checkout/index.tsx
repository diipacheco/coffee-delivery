import { Fragment } from 'react';
import { CurrencyDollar, MapPin, Trash } from 'phosphor-react';

import { useCartContext } from '../../context/Cart';

import { TextInput } from '../../components/Form/TextInput';
import { PaymentSelect } from '../../components/Form/PaymentSelect';
import { QuantityInput } from '../../components/Form/QuantityInput';

import {
  CheckoutContainer,
  Container,
  OrderContainer,
  FormContainer,
  PaymentSelection,
  AddressHeading,
  InputsContainer,
  PaymentSelectionHeading,
  SelectsContainer,
  CheckoutInfo,
  ProductsContainer,
  RemoveButton,
  ProductInfo,
  PriceContainer,
  ProductItem,
  Line,
  TotalContainer,
  TotalInfo,
} from './styles';

export function Checkout() {
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

  console.log(addedItems);

  return (
    <Container>
      <OrderContainer>
        <h3>Complete seu pedido</h3>
        <FormContainer>
          <AddressHeading>
            <MapPin size={22} />
            <div>
              <span>Endereço de Entrega</span>

              <p>Informe o endereço onde deseja receber o seu pedido</p>
            </div>
          </AddressHeading>

          <InputsContainer>
            <TextInput
              placeholder="CEP"
              type="string"
              containerProps={{ style: { gridArea: 'cep' } }}
            />
            <TextInput
              placeholder="Rua"
              containerProps={{ style: { gridArea: 'street' } }}
              // error={errors.street}
              // {...register('street')}
            />

            <TextInput
              placeholder="Número"
              containerProps={{ style: { gridArea: 'number' } }}
              // error={errors.number}
              // {...register('number')}
            />

            <TextInput
              placeholder="Complemento"
              optional
              containerProps={{ style: { gridArea: 'fullAddress' } }}
              // error={errors.fullAddress}
              // {...register('fullAddress')}
            />

            <TextInput
              placeholder="Bairro"
              containerProps={{ style: { gridArea: 'neighborhood' } }}
              // error={errors.neighborhood}
              // {...register('neighborhood')}
            />

            <TextInput
              placeholder="Cidade"
              containerProps={{ style: { gridArea: 'city' } }}
              // error={errors.city}
              // {...register('city')}
            />

            <TextInput
              placeholder="UF"
              maxLength={2}
              containerProps={{ style: { gridArea: 'state' } }}
              // error={errors.state}
              // {...register('state')}
            />
          </InputsContainer>
        </FormContainer>

        <PaymentSelection>
          <PaymentSelectionHeading>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentSelectionHeading>
          <SelectsContainer>
            <PaymentSelect
              isSelected={false}
              name="paymentMethod"
              paymentMethod="credit"
              value="credit"
            />
            <PaymentSelect
              isSelected={false}
              name="paymentMethod"
              paymentMethod="debit"
              value="debit"
            />
            <PaymentSelect
              isSelected={false}
              name="paymentMethod"
              paymentMethod="cash"
              value="cash"
            />
          </SelectsContainer>
        </PaymentSelection>
      </OrderContainer>

      <CheckoutContainer>
        <h3>Cafés selecionados</h3>
        <CheckoutInfo>
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
              <button>Confirmar Pedido</button>
            </TotalContainer>
          </ProductsContainer>
        </CheckoutInfo>
      </CheckoutContainer>
    </Container>
  );
}
