import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SalaryListRelationFilter } from "../salary/SalaryListRelationFilter";
import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";

export type EmployeeWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  salary?: FloatNullableFilter;
  lastName?: StringNullableFilter;
  position?: StringNullableFilter;
  salaries?: SalaryListRelationFilter;
  branch?: BranchWhereUniqueInput;
};
