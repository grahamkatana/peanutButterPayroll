import { useState, createContext } from "react";

export const EmployeesContext = createContext<any>(null);

const EmployeeProvider = ({ children }: { children: React.ReactNode }) => {
  const [employee, setEmployee] = useState<any>(null);
  const [showFields, setShowFields] = useState<any>(false);
  return (
    <EmployeesContext.Provider value={{ employee, setEmployee, showFields, setShowFields }}>
      {children}
    </EmployeesContext.Provider>
  );
};
export default EmployeeProvider;
