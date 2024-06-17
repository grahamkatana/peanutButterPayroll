import { IEmployeesRequest } from "../types/types";
import { Table } from "@mantine/core";
import { schemes } from "../constants/Colors";
import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeeContext";
function EmployeeRow({ employee }: { employee: IEmployeesRequest }) {
  const { setEmployee } = useContext(EmployeesContext);
  return (
    <Table.Tr
      onClick={() => setEmployee(employee)}
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
      <Table.Td>
        {employee.profile_color.charAt(0).toUpperCase() +
          employee.profile_color.slice(1).toLowerCase()}
      </Table.Td>
    </Table.Tr>
  );
}

export default EmployeeRow;
