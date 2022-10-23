import DashboardLayout from "../../components/layouts/Dashboard";
import TabsMenu from "../../components/TabsMenu";

import * as Styled from "./index.styles";

const Dashboard = () => {
  console.log('render dash')
  return (
    <Styled.DashboardWrapper>
      <DashboardLayout header={<div>Top Header</div>} menu={<TabsMenu />}>
        <div>Dash Content</div>
      </DashboardLayout>
    </Styled.DashboardWrapper>
  );
};

export default Dashboard;
