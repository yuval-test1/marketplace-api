import { SalaryUpdateManyWithoutEmployeesInput } from "./SalaryUpdateManyWithoutEmployeesInput";
import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";

export type EmployeeUpdateInput = {
  firstName?: string | null;
  salary?: number | null;
  lastName?: string | null;
  position?: string | null;
  salaries?: SalaryUpdateManyWithoutEmployeesInput;
  branch?: BranchWhereUniqueInput | null;
};
