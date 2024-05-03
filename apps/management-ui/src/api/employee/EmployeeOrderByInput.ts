import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  salary?: SortOrder;
  lastName?: SortOrder;
  position?: SortOrder;
  branchId?: SortOrder;
};
