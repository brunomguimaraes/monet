import styled from "styled-components";

import { mainColors } from "../../style/colors";

export const ModalWrapper = styled.div`
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  padding: 64px 16px;
  box-sizing: border-box;
  border: solid 1px ${mainColors.black};
  border-radius: 0.5em;
  background: ${mainColors.black};
`;
