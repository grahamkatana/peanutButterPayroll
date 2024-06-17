import { useQuery } from "@tanstack/react-query";
import { getAllEmployeesFn } from "../api/employeeApi";
import EmployeesTable from "../components/EmployeesTable";
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

  return <div>{data && <EmployeesTable data={data.data} />}</div>;
}

export default EmployeesPage;
