import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

   :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.yellowDark};
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.baseText}; 
    -webkit-font-smoothing: antialiased;
  }
  
  h1, h2, h3 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    line-height: 130%;
    font-size: 1.5rem;
  }

  body, input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 130%;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%; 
  }
`;
