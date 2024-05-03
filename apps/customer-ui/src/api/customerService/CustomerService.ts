import { Customer } from "../customer/Customer";

export type CustomerService = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateReceived: Date | null;
  inquiryType: string | null;
  customer?: Customer | null;
  description: string | null;
};
