import EmployeeRow from "./EmployeeRow";
import { IEmployeesRequest } from "../types/types";
import EmployeesTableHeader from "./EmployeesTableHeader";
import { Table } from "@mantine/core";
function EmployeesTable({ data }: { data: IEmployeesRequest[] }) {
  return (
    <div>
      <Table  striped highlightOnHover withTableBorder withColumnBorders>
        <EmployeesTableHeader />
        {data.map((employee: IEmployeesRequest) => (
          <EmployeeRow employee={employee} />
        ))}
      </Table>
    </div>
  );
}

export default EmployeesTable;
