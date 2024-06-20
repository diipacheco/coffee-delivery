import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/Global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>hello world</h1>
    </ThemeProvider>
  );
}

export default App;
