import { Header } from '../components/Header';
import { Home } from '../pages/Home';

import { Container } from './styles';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
    </>
  );
}
