import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";

export type BranchWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  numberOfEmployees?: IntNullableFilter;
  employees?: EmployeeListRelationFilter;
};
