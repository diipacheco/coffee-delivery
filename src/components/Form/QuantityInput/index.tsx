import { Minus, Plus } from 'phosphor-react';
import { Container } from './styles';

export function QuantityInput() {
  return (
    <Container>
      <button>
        <Minus />
      </button>
      <span>1</span>
      <button>
        <Plus />
      </button>
    </Container>
  );
}
