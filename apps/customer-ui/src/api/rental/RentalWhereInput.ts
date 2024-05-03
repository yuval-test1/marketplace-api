import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type RentalWhereInput = {
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  branch?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
};
