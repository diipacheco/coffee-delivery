import { Minus, Plus } from 'phosphor-react';
import { Container } from './styles';

interface QuantityInputProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}
export function QuantityInput({ quantity, increaseQuantity, decreaseQuantity }: QuantityInputProps) {
  return (
    <Container>
      <button onClick={decreaseQuantity} type="button">
        <Minus />
      </button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity} type="button">
        <Plus />
      </button>
    </Container>
  );
}
