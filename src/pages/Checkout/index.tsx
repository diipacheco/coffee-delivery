import * as zod from 'zod';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AddressForm } from './components/AddressForm';
import { CheckoutInfo } from './components/CheckoutInfo';
import { PaymentSelection } from './components/PaymentSelection';

import { useCartContext } from '../../context/Cart';
import { Order } from '../../reducers/cart/reducer';

import { CheckoutContainer, Container, OrderContainer } from './styles';

type FormInputs = {
  cep: string;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: 'credit' | 'debit' | 'cash';
};

const newOrderValidationSchema = zod.object({
  cep: zod
    .string()
    .min(9, 'Informe um CEP válido')
    .regex(new RegExp(/^\d{2}\d{3}[-]\d{3}$/gm)),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  fullAddress: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
});

export type NewOrderFormData = zod.infer<typeof newOrderValidationSchema>;

export function Checkout() {
  const newOrderForm = useForm<FormInputs>({
    resolver: zodResolver(newOrderValidationSchema),
  });
  const navigate = useNavigate();
  const { checkout } = useCartContext();

  const { handleSubmit, reset } = newOrderForm;

  function handleNewOrder({
    street,
    number,
    city,
    state,
    paymentMethod,
    neighborhood,
  }: NewOrderFormData) {
    const order = {
      id: new Date().getTime(),
      address: {
        street,
        number,
        neighborhood,
        city,
        state,
      },
      paymentMethod,
    } as Order;
    checkout(order);
    navigate(`/order/${order.id}/success`);

    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleNewOrder)}>
      <Container>
        <FormProvider {...newOrderForm}>
          <OrderContainer>
            <h3>Complete seu pedido</h3>
            <AddressForm />
            <PaymentSelection />
          </OrderContainer>

          <CheckoutContainer>
            <h3>Cafés selecionados</h3>
            <CheckoutInfo />
          </CheckoutContainer>
        </FormProvider>
      </Container>
    </form>
  );
}
