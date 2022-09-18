import styled from "styled-components";

import { mainColors } from '../../style/colors';

export const Input = styled.input`
  font-size: 16px;
  
  padding: 16px;
  margin: 16px;
  background: ${mainColors.clearBackground};
  border: none;
  border-radius: 4px;

  ::placeholder {
    color: ${mainColors.primary};
  }
`;