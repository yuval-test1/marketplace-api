import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  firstName?: SortOrder;
};
