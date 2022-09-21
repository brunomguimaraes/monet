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
  -webkit-box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);
`;
