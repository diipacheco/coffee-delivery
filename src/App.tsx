import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/Global';
import { defaultTheme } from './styles/themes/default';
import { DefaultLayout } from './layouts/DefaultLayout';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <DefaultLayout />
    </ThemeProvider>
  );
}

export default App;
