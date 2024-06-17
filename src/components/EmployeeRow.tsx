import { IEmployeesRequest } from "../types/types";
import { Table } from "@mantine/core";
function EmployeeRow({ employee }: { employee: IEmployeesRequest }) {
  return (
    <Table.Tr style={{ backgroundColor: employee.profile_color, color: "white" }}>
      <Table.Td>{employee.employee_number}</Table.Td>
      <Table.Td>{employee.first_name}</Table.Td>
      <Table.Td>{employee.last_name}</Table.Td>
      <Table.Td>{employee.salutation}</Table.Td>
      <Table.Td>{employee.profile_color}</Table.Td>
    </Table.Tr>
  );
}

export default EmployeeRow;
