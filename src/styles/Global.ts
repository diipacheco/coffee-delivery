import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

   :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.productColors.yellowDark};
  }

  body {
    background-color: ${({ theme }) => theme.colors.baseColors.background};
    color: ${({ theme }) => theme.colors.baseColors.baseText}; 
    -webkit-font-smoothing: antialiased;
  }
  
  h1, h2, h3 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    line-height: 130%;
    font-size: ${({ theme }) => theme.textSizes.titles.titleM};
  }

  body, input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 130%;
    font-size: ${({ theme }) => theme.textSizes.texts.textM}
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
