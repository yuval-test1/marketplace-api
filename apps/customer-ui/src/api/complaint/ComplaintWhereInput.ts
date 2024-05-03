import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ComplaintWhereInput = {
  id?: StringFilter;
  dateFiled?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
};
