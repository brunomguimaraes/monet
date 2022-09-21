import styled from "styled-components";

import { mainColors } from "../../style/colors";

export const Header = styled.h1`
  font-size: 20px;
  color: ${mainColors.white};
  margin-bottom: 32px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${mainColors.white};
  margin-bottom: 4px;
`;

export const Input = styled.input`
position: relative;
  font-size: 16px;
  width: 100%;
  padding: 16px;
  border: 2px solid ${mainColors.lightGray};
  color: ${mainColors.white};
  border-radius: 8px;
  background: ${mainColors.darkGray};
  margin-bottom: 32px;

  ::placeholder {
    color: ${mainColors.white};
    opacity: 0.5;
  }

  &:focus {
    outline:0;
    border: 2px solid ${mainColors.primaryLight};
    
    ::placeholder {
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  background: linear-gradient(0.25turn, ${mainColors.secondary}, ${mainColors.primary},  ${mainColors.primaryLight});
  border: 0px solid transparent;
  border-radius: 8px;
  color: ${mainColors.white};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 16px 32px;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 264px;
`;
