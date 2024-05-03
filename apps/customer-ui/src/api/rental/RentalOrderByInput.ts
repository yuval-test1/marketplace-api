import { SortOrder } from "../../util/SortOrder";

export type RentalOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startDate?: SortOrder;
  branch?: SortOrder;
  endDate?: SortOrder;
  customerId?: SortOrder;
};
