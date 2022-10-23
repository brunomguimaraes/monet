import { createGlobalStyle } from 'styled-components';

import { mainColors } from './colors';
 
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${mainColors.primaryBackground};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;