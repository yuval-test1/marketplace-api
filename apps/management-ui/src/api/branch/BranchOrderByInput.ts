import { SortOrder } from "../../util/SortOrder";

export type BranchOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  numberOfEmployees?: SortOrder;
};
