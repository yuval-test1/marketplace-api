import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CustomerServiceCreateInput = {
  dateReceived?: Date | null;
  inquiryType?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
};
