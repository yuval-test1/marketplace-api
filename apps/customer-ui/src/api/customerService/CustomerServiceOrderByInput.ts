import { SortOrder } from "../../util/SortOrder";

export type CustomerServiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateReceived?: SortOrder;
  inquiryType?: SortOrder;
  customerId?: SortOrder;
  description?: SortOrder;
};
