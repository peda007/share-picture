import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration:none;
    color:inherit;
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    height: 100%;
  }
  button {
    cursor: pointer;
    border: none;
  }
`;

export default GlobalStyles;
