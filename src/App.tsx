import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/Global';
import { defaultTheme } from './styles/themes/default';
import { CartContextProvider } from './context/Cart';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <GlobalStyle />
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
