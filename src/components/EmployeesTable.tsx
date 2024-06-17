import EmployeeRow from "./EmployeeRow";
import { IEmployeesRequest } from "../types/types";
import EmployeesTableHeader from "./EmployeesTableHeader";
function EmployeesTable({ data }: { data: IEmployeesRequest[] }) {
  return (
    <div>
      <table>
        <EmployeesTableHeader />
        {data.map((employee: IEmployeesRequest) => (
          <EmployeeRow employee={employee} />
        ))}
      </table>
    </div>
  );
}

export default EmployeesTable;
