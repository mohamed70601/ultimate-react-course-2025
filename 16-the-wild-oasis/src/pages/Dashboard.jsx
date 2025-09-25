import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardFiler from "../features/dashboard/DashboardFilter";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFiler />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
