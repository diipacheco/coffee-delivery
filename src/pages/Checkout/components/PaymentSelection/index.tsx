import { CurrencyDollar } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';

import { PaymentSelect } from '../../../../components/Form/PaymentSelect';

import { Container, PaymentSelectionHeading, SelectsContainer } from './styles';

export function PaymentSelection() {
  const { watch, register } = useFormContext();
  const selectedPaymentMethod = watch('paymentMethod');
  return (
    <Container>
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
          isSelected={selectedPaymentMethod === 'credit'}
          {...register('paymentMethod')}
          name="paymentMethod"
          paymentMethod="credit"
          value="credit"
        />
        <PaymentSelect
          isSelected={selectedPaymentMethod === 'debit'}
          {...register('paymentMethod')}
          name="paymentMethod"
          paymentMethod="debit"
          value="debit"
        />
        <PaymentSelect
          isSelected={selectedPaymentMethod === 'cash'}
          {...register('paymentMethod')}
          name="paymentMethod"
          paymentMethod="cash"
          value="cash"
        />
      </SelectsContainer>
    </Container>
  );
}
