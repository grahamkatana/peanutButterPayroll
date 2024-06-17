import { IEmployeesRequest } from "../types/types";
import { Table } from "@mantine/core";
import { schemes } from "../constants/Colors";
function EmployeeRow({ employee }: { employee: IEmployeesRequest }) {
  return (
    <Table.Tr onClick={() => console.log(employee)}
      style={{
        backgroundColor:
          schemes[employee.profile_color as keyof typeof schemes],
        color: "#fff",
      }}
    >
      <Table.Td>{employee.employee_number}</Table.Td>
      <Table.Td>{employee.first_name}</Table.Td>
      <Table.Td>{employee.last_name}</Table.Td>
      <Table.Td>
        {employee.salutation.charAt(0).toUpperCase() +
          employee.salutation.slice(1).toLowerCase()}
      </Table.Td>
      <Table.Td>{employee.profile_color}</Table.Td>
    </Table.Tr>
  );
}

export default EmployeeRow;
