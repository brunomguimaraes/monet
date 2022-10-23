import DashboardLayout from "components/layouts/Dashboard";
import Groceries from "components/Groceries";
import TabsMenu from "components/TabsMenu";

import * as Styled from "./index.styles";

const Dashboard = () => {
  return (
    <Styled.DashboardWrapper>
      <DashboardLayout header={<div />} menu={<TabsMenu />}>
        <Groceries />
      </DashboardLayout>
    </Styled.DashboardWrapper>
  );
};

export default Dashboard;
