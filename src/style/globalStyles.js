import { createGlobalStyle } from 'styled-components';

import { mainColors } from './colors';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${mainColors.primaryBackground};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;