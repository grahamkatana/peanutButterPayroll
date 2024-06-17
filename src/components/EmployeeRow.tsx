import { IEmployeesRequest } from "../types/types";
function EmployeeRow({ employee }: { employee: IEmployeesRequest }) {
  return (
    <tr style={{ backgroundColor: employee.profile_color, color: "white" }}>
      <td>{employee.employee_number}</td>
      <td>{employee.first_name}</td>
      <td>{employee.last_name}</td>
      <td>{employee.salutation}</td>
      <td>{employee.profile_color}</td>
    </tr>
  );
}

export default EmployeeRow;
