import { useTheme } from 'styled-components';
import { ShoppingCart } from 'phosphor-react';

import { CoffeeInfo, Container, Tags, Tag, Control, Price, Order } from './styles';

interface CardProps {
  coffee: {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    tags: string[];
  };
}
export function Card({ coffee }: CardProps) {
  const coffeePrice = coffee.price.toFixed(2);
  const theme = useTheme();
  return (
    <Container>
      <img src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
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
          {/**
            Fazer o input em um componente separado de form
           */}
          <input type="number" />
          <button type="button">
            <ShoppingCart size={22} weight="fill" color={theme.colors.baseColors.baseCard} />
          </button>
        </Order>
      </Control>
    </Container>
  );
}
