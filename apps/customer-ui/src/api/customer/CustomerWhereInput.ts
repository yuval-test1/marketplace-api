import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ComplaintListRelationFilter } from "../complaint/ComplaintListRelationFilter";
import { CustomerServiceListRelationFilter } from "../customerService/CustomerServiceListRelationFilter";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  firstName?: StringNullableFilter;
  complaints?: ComplaintListRelationFilter;
  customerServices?: CustomerServiceListRelationFilter;
  rentals?: RentalListRelationFilter;
};
