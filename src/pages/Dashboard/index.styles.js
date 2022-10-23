import styled from "styled-components";

import { mainColors } from "style/colors";

export const DashboardWrapper = styled.div`
`;

export const AvatarContainer = styled.div`
	padding: 16px 0 8px 64px;
	display: flex;
	align-items: center;
`;

export const Title = styled.span`
	font-size: 32px;
	font-family: 'Poppins', sans-serif;
	color: ${mainColors.white};

`

export const Avatar = styled.div`
  background: linear-gradient(0.25turn, ${mainColors.lightPurple}, ${mainColors.blue});
  border: 0px solid transparent;
  border-radius: 72px;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
	margin-right: 32px;
`;
