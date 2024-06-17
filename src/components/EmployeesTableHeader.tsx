import { Table } from "@mantine/core";
function EmployeesTableHeader() {
  return (
    <Table.Thead>
      <Table.Tr>
        <Table.Th>Employee #</Table.Th>
        <Table.Th>First Name</Table.Th>
        <Table.Th>Last Name</Table.Th>
        <Table.Th>Salutation</Table.Th>
        <Table.Th>Profile Colour</Table.Th>
      </Table.Tr>
    </Table.Thead>
  );
}

export default EmployeesTableHeader;
