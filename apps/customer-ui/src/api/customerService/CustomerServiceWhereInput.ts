import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CustomerServiceWhereInput = {
  id?: StringFilter;
  dateReceived?: DateTimeNullableFilter;
  inquiryType?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
};
