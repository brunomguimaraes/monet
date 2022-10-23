import styled, { css } from "styled-components";

import { mainColors } from "style/colors";

export const MenuWrapper = styled.nav`
  padding-top: 80px;
`;

export const MenuSection = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 16px 0 0;
`;

export const MenuItem = styled.li`
  color: ${mainColors.lightGray};
  padding: 16px 0 16px 32px;
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;

  ${({ selected }) => selected && css`
    color: ${mainColors.white};
    background: linear-gradient(0.25turn, ${mainColors.lightPurple}, ${mainColors.blue});
    border-radius: 0 32px 32px 0;
  `}


  svg {
    margin-right: 12px;
  }
`;

