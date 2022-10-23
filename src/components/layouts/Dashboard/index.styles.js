import styled from "styled-components";

export const DashContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(3, auto);
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

`;

export const Content = styled.div`
  grid-area: content;
`;
