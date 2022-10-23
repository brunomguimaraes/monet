import GroceryList from "components/Groceries/GroceryList";

import * as Styled from "./index.styles";

const Groceries = () => {
	// TODO: isMobile version
	return (
		<Styled.Container>
			<GroceryList />
		</Styled.Container>
	);
};

export default Groceries;
