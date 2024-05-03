import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type SalaryUpdateInput = {
  paymentDate?: Date | null;
  amount?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
};
