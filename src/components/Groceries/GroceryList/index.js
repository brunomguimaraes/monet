import * as Styled from "./index.styles";

const GroceryList = () => {
	// TODO: isMobile version
	return (
		<Styled.List>
			<Styled.Title>
				Grocery List
			</Styled.Title>

			<Styled.ListSection>
				<Styled.ItemList>
					<Styled.Item>
						Banana
					</Styled.Item>
					<Styled.Item selected>
						Apple
					</Styled.Item>
				</Styled.ItemList>
			</Styled.ListSection>
		</Styled.List>
	);
};

export default GroceryList;
