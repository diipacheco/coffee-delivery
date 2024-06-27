import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';

import { Card } from '../../components/Card';

import CoffeeDelivery from '../../assets/CoffeeDelivery.png';
import productsData from '../../../data.json';

import { Intro, IntroInfo, ProductsListContainer } from './styles';

export function Home() {
  const theme = useTheme();
  return (
    <>
      <Intro>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <IntroInfo>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.colors.baseColors.background}
                style={{
                  backgroundColor: theme.colors.productColors.yellowDark,
                }}
              />
              <span>Compra simples e segura</span>
            </div>

            <div>
              <Package
                size={32}
                weight="fill"
                color={theme.colors.baseColors.background}
                style={{ backgroundColor: theme.colors.baseColors.baseText }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme.colors.baseColors.background}
                style={{ backgroundColor: theme.colors.productColors.yellow }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme.colors.baseColors.background}
                style={{ backgroundColor: theme.colors.productColors.purple }}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </IntroInfo>
        </div>

        <div>
          <img src={CoffeeDelivery} alt="Café do Coffee Delivery" />
        </div>
      </Intro>
      <ProductsListContainer>
        <h2>Nossos Cafés</h2>

        <ul>
          {productsData.coffees.map(coffee => (
            <li key={coffee.id}>
              <Card coffee={coffee} />
            </li>
          ))}
        </ul>
      </ProductsListContainer>
    </>
  );
}
