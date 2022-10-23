import * as Styled from "./index.styles";

const DashboardLayout = ({ header, menu, children }) => {
	// TODO: isMobile version
	return (
		<Styled.DashContainer>
			<Styled.Header>
				{header}
			</Styled.Header>

			<Styled.Menu>
				{menu}
			</Styled.Menu>

			<Styled.Content>
				{children}
			</Styled.Content>
		</Styled.DashContainer>
	);
};

export default DashboardLayout;
