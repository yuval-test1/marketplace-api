import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type RentalCreateInput = {
  startDate?: Date | null;
  branch?: string | null;
  endDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
};
