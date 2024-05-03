import { EmployeeCreateNestedManyWithoutBranchesInput } from "./EmployeeCreateNestedManyWithoutBranchesInput";

export type BranchCreateInput = {
  location?: string | null;
  name?: string | null;
  numberOfEmployees?: number | null;
  employees?: EmployeeCreateNestedManyWithoutBranchesInput;
};
