import { ReactComponent as PetHouseIcon } from 'assets/icons/pet-house.svg';

import { mainColors } from "style/colors";
import * as Styled from "./index.styles";

const DashboardLayout = ({ header, menu, children }) => {
	// TODO: isMobile version
	return (
		<Styled.DashContainer>
			<Styled.Header>
				{header}
			</Styled.Header>

			<Styled.Menu>
				<Styled.MenuHeader>
					<PetHouseIcon width={64} height={64} color={mainColors.lightPurple} />
					<Styled.TextContainer>
						<Styled.Title>Athena & Monet</Styled.Title>
						<Styled.Subtitle>Family App</Styled.Subtitle>
					</Styled.TextContainer>
				</Styled.MenuHeader>
				{menu}
			</Styled.Menu>

			<Styled.Content>
				{children}
			</Styled.Content>
		</Styled.DashContainer>
	);
};

export default DashboardLayout;
