import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type SalaryWhereInput = {
  id?: StringFilter;
  paymentDate?: DateTimeNullableFilter;
  amount?: FloatNullableFilter;
  employee?: EmployeeWhereUniqueInput;
};
