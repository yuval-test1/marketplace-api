import { Employee } from "../employee/Employee";

export type Branch = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  location: string | null;
  name: string | null;
  numberOfEmployees: number | null;
  employees?: Array<Employee>;
};
