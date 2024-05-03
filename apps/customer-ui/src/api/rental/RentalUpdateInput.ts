import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type RentalUpdateInput = {
  startDate?: Date | null;
  branch?: string | null;
  endDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
};
