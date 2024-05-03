import { Employee } from "../employee/Employee";

export type Salary = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  paymentDate: Date | null;
  amount: number | null;
  employee?: Employee | null;
};
