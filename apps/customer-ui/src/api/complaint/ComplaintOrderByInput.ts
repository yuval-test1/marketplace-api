import { SortOrder } from "../../util/SortOrder";

export type ComplaintOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateFiled?: SortOrder;
  description?: SortOrder;
  customerId?: SortOrder;
};
