import DashboardLayout from "components/layouts/Dashboard";
import Groceries from "components/Groceries";
import TabsMenu from "components/TabsMenu";

import { ReactComponent as DogColoredIcon } from 'assets/icons/dog-colored.svg';

import * as Styled from "./index.styles";

const renderHeader = () => {

  return (
    <Styled.AvatarContainer>
      <Styled.Avatar>
        <DogColoredIcon
          width={48}
          height={48}
        />
      </Styled.Avatar>
      <Styled.Title>
        Heyo, Bruno Guimarães!
      </Styled.Title>
    </Styled.AvatarContainer>
  )
}

const Dashboard = () => {
  return (
    <Styled.DashboardWrapper>
      <DashboardLayout header={renderHeader()} menu={<TabsMenu />}>
        <Groceries />
      </DashboardLayout>
    </Styled.DashboardWrapper>
  );
};

export default Dashboard;
