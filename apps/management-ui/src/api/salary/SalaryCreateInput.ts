import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type SalaryCreateInput = {
  paymentDate?: Date | null;
  amount?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
};
