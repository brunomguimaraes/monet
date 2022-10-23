import styled, { css } from "styled-components";

import { mainColors } from "style/colors";

export const List = styled.div`

`;

export const Title = styled.span`
	font-size: 24px;
	font-family: 'Poppins', sans-serif;
	color: ${mainColors.purple};
`;

export const ListSection = styled.div`
	margin-top 8px;
	background: ${mainColors.clearBackground};
	border-radius: 8px;
	width: 400px;
	height: 360px;
`;

export const ItemList = styled.ul`
	list-style-type: none;
	padding: 8px 0 0 24px;
`;

export const Item = styled.li`
	color: ${mainColors.white};
	font-size: 16px;

	${({ selected }) => selected && css`
		color: ${mainColors.lightGray};
		text-decoration: line-through;
	`}
`;