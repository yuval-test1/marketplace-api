import { CustomerService as TCustomerService } from "../api/customerService/CustomerService";

export const CUSTOMERSERVICE_TITLE_FIELD = "inquiryType";

export const CustomerServiceTitle = (record: TCustomerService): string => {
  return record.inquiryType?.toString() || String(record.id);
};
