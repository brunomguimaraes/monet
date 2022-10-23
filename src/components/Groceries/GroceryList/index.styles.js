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
	margin-top: 8px;
	cursor: pointer;
	display: flex;
	align-items: center;

	svg {
		margin-right: 8px;
	}

	${({ selected }) => selected && css`
		color: ${mainColors.lightGray};
		text-decoration: line-through;
	`}
`;

export const Button = styled.button`
	background: linear-gradient(0.25turn, ${mainColors.lightPurple}, ${mainColors.blue});
	font-size: 20px;
	border: 0px solid transparent;
  border-radius: 16px;
  color: ${mainColors.white};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
	margin-left: 8px;
`;

export const FormSection = styled.div`
	margin-top 16px;
	border-radius: 8px;
	width: 400px;
	padding: 8px;
	display: flex;
	align-items: center;
`;

export const TextInput = styled.input.attrs({
		type: 'text'
	})`
		width: 100%;
		background: ${mainColors.clearBackground};
		color: ${mainColors.lightGray};
		font-size: 16px;
		font-size: max(16px, 1em);
		border: 2px solid;
		border-radius: 4px;
`