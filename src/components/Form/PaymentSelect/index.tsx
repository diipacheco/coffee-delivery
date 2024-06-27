import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react';
import { Bank, CreditCard, Money } from 'phosphor-react';

import { Label } from './styles';

type PaymentSelectProps = InputHTMLAttributes<HTMLInputElement> & {
  paymentMethod: 'credit' | 'debit' | 'cash';
  isSelected: boolean;
};

export const PaymentSelect = forwardRef(function Select(
  { paymentMethod, isSelected, ...rest }: PaymentSelectProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <Label data-state={isSelected}>
      {paymentMethod === 'credit' && (
        <>
          <input type="radio" ref={ref} {...rest} />
          <CreditCard size={16} />
          <span>cartão de crédito</span>
        </>
      )}
      {paymentMethod === 'debit' && (
        <>
          <input type="radio" ref={ref} {...rest} />
          <Bank size={16} />
          <span>cartão de débito</span>
        </>
      )}
      {paymentMethod === 'cash' && (
        <>
          <input type="radio" ref={ref} {...rest} />
          <Money size={16} />
          <span>dinheiro</span>
        </>
      )}
    </Label>
  );
});
