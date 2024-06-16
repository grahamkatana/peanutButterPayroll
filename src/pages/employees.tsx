import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllEmployeesFn } from "../api/employeeApi";
function EmployeesPage() {
    const employeesQuery = useQuery({
        queryKey: ["employees"],
        queryFn: async () => {
            let data = await getAllEmployeesFn();
            console.log("DATA IS",data);
        //   const response = await axios.get(
        //     "https://reporting-engine.t6f.co.za/api/reports/ms/clients"
        //   );
        //   let data = await response.data;
        //   data = data.data.filter((c: any) => c.id !== undefined);
        //   setCompanies(data);
        //   return {
        //     data: data,
        //   };
        },
    
        // staleTime: 0,
      });
  
  return <div>Employees</div>;
}

export default EmployeesPage;
