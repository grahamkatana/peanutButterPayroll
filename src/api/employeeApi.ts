import { IEmployeeRequest, IEmployeesRequest } from "../types/types";
import { baseApi } from "./baseApi";
export const getAllEmployeesFn = async () => {

    const response = await baseApi.get<IEmployeesRequest>(`employees`);
    return response.data;

}

export const createEmployeesFn = async (data: IEmployeeRequest) => {
    const response = await baseApi.post<IEmployeeRequest>(`employees`, data);
    return response.data;
};

export const updateEmployeesFn = async ({
    id,
    data,
}: {
    id: string;
    data: IEmployeeRequest;
}) => {
    const response = await baseApi.patch<IEmployeeRequest>(`employees/${id}`, data);
    return response.data;
};

export const showEmployeesFn = async (id: string) => {
    // TODO
    const response = await baseApi.get<any>(`employees/${id}`);
    return response.data;
};

export const deleteEmployeesFn = async (id: string) => {
    // TODO
    const response = await baseApi.delete<any>(`employees/${id}`);
    return response.data;
};