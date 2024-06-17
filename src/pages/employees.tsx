import { useQuery } from "@tanstack/react-query";
import { getAllEmployeesFn } from "../api/employeeApi";
import EmployeesTable from "../components/EmployeesTable";
import { Container, SimpleGrid, Flex, Title, Button, Box, Loader, Center } from "@mantine/core";
import EmployeeFields from "../components/EmployeeFields";
import { EmployeesContext } from "../context/EmployeeContext";
import { useContext } from "react";
function EmployeesPage() {
    const { setShowFields } = useContext(EmployeesContext);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["employees"],
    queryFn: getAllEmployeesFn,
  });
  if (isLoading) {
    return <Center mt={'15%'}>
        <Loader color="blue" type="dots" />
    </Center>;
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
          <Button onClick={()=>setShowFields(true)} variant="filled">Add Employee</Button>
        </Flex>
      </SimpleGrid>
      {/* Page Table */}
      {data && <EmployeesTable data={data.data} />}
      <Box pr={25} pl={25}>
      <EmployeeFields />
      </Box>
 
    </Container>
  );
}

export default EmployeesPage;
