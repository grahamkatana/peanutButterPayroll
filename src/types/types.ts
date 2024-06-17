export interface IEmployeeRequest {
    first_name: string;
    last_name: string;
    gender: string;
    salutation: string;
    gross_salary: number;
    profile_color: string;
    employee_number: number;
  }

  export interface IEmployeesRequest {
    id:number,
    first_name: string;
    last_name: string;
    gender: string;
    salutation: string;
    gross_salary: number;
    profile_color: string;
    employee_number: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
  }

  export interface IEmployeesResponse {
    data: IEmployeesRequest[];
  }
  

  
  