import { SalaryCreateNestedManyWithoutEmployeesInput } from "./SalaryCreateNestedManyWithoutEmployeesInput";
import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";

export type EmployeeCreateInput = {
  firstName?: string | null;
  salary?: number | null;
  lastName?: string | null;
  position?: string | null;
  salaries?: SalaryCreateNestedManyWithoutEmployeesInput;
  branch?: BranchWhereUniqueInput | null;
};
