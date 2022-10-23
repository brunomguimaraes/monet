import styled from "styled-components";

import { mainColors } from "style/colors";

export const DashContainer = styled.div`
  display: grid;
  grid-template-columns: 240px repeat(3, auto);
  grid-template-rows: 1fr repeat(2, 2fr);
  grid-template-areas: 
    "menu header header header"
    "menu content content content";
    "menu content content content";
`;

export const Header = styled.div`
  grid-area: header;

`;

export const Menu = styled.div`
  grid-area: menu;
  background: ${mainColors.clearBackground};
  height: 100vh;
`;

export const Content = styled.div`
  grid-area: content;
`;
