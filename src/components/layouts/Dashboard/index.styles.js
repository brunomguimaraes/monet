import styled from "styled-components";

import { mainColors } from "style/colors";

export const DashContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 240px auto;
  grid-template-rows: 1fr 5fr;
  grid-template-areas: 
    "menu header"
    "menu content";
`;

export const Header = styled.div`
  grid-area: header;
`;

export const Menu = styled.div`
  grid-area: menu;
  background: ${mainColors.clearBackground};
`;

export const MenuHeader = styled.div`
  padding: 16px 0 8px 16px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;

export const Content = styled.div`
  grid-area: content;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  color: ${mainColors.lightPurple};
`

export const Subtitle = styled.span`
  font-size: 10px;
  font-family: 'Poppins', sans-serif;
  color: ${mainColors.lightPurple};
`
