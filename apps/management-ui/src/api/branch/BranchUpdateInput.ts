import { EmployeeUpdateManyWithoutBranchesInput } from "./EmployeeUpdateManyWithoutBranchesInput";

export type BranchUpdateInput = {
  location?: string | null;
  name?: string | null;
  numberOfEmployees?: number | null;
  employees?: EmployeeUpdateManyWithoutBranchesInput;
};
