import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/Global';
import { defaultTheme } from './styles/themes/default';
import { DefaultLayout } from './layouts/DefaultLayout';
import { CartContextProvider } from './context/Cart';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <GlobalStyle />
        <DefaultLayout />
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
