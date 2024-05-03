import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CustomerServiceUpdateInput = {
  dateReceived?: Date | null;
  inquiryType?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
};
