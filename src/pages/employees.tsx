import { useQuery } from "@tanstack/react-query";
import { getAllEmployeesFn } from "../api/employeeApi";
import EmployeesTable from "../components/EmployeesTable";
import { Container, SimpleGrid, Flex, Title, Button } from "@mantine/core";
import EmployeeFields from "../components/EmployeeFields";
function EmployeesPage() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["employees"],
    queryFn: getAllEmployeesFn,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <Container fluid>
      {/* Page Header */}
      <SimpleGrid cols={2}>
        <Flex
          mih={50}
          gap="xl"
          justify="flex-end"
          align="center"
          direction="row"
          wrap="nowrap"
        >
          <Title order={4}>Current Employees</Title>
        </Flex>
        <Flex
          mih={50}
          gap="xl"
          justify="flex-end"
          align="center"
          direction="row"
          wrap="nowrap"
        >
          <Button variant="filled">Add Employee</Button>
        </Flex>
      </SimpleGrid>
      {/* Page Table */}
      {data && <EmployeesTable data={data.data} />}
      <EmployeeFields />
    </Container>
  );
}

export default EmployeesPage;
