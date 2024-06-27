import { useState } from 'react';
import { useTheme } from 'styled-components';
import { ShoppingCart } from 'phosphor-react';

import { QuantityInput } from '../Form/QuantityInput';
import { Coffee } from '../../reducers/cart/reducer';

import {
  CoffeeInfo,
  Container,
  Tags,
  Tag,
  Control,
  Price,
  Order,
} from './styles';
import { useCartContext } from '../../context/Cart';

interface CardProps {
  coffee: Coffee;
}
export function Card({ coffee }: CardProps) {
  const [subtotal, setSubtotal] = useState(coffee.price);

  const { addCoffeeToCart } = useCartContext();
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);

  const coffeePrice = subtotal.toFixed(2);

  function increaseQuantity() {
    setQuantity(state => state + 1);
    setSubtotal(state => (state += coffee.price));
  }

  function decreaseQuantity() {
    setQuantity(state => {
      if (state > 1) {
        setSubtotal(state => state - coffee.price);
        return state - 1;
      }
      return state;
    });
  }

  function handleAddCoffeeToCart() {
    const itemToAddData = {
      ...coffee,
      quantity,
      subtotal,
    };
    addCoffeeToCart(itemToAddData, quantity);
  }

  return (
    <Container>
      <img src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>

      <CoffeeInfo>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </CoffeeInfo>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffeePrice.toString().replace('.', ',')}</span>
        </Price>

        <Order>
          <QuantityInput
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
          <button type="button" onClick={handleAddCoffeeToCart}>
            <ShoppingCart
              size={22}
              weight="fill"
              color={theme.colors.baseColors.baseCard}
            />
          </button>
        </Order>
      </Control>
    </Container>
  );
}
