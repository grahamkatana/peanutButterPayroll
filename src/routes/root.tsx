import { Outlet } from "react-router-dom";
import EmployeesPage from "../pages/employees";
import { Box } from "@mantine/core";
export default function Root() {
  return (
    <>
      <Box p={15}>
        {/* Once you have multiple pages move this to the router */}
        <EmployeesPage />
        <Outlet />
      </Box>
    </>
  );
}
