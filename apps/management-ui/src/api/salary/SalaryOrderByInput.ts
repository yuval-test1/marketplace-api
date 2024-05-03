import { SortOrder } from "../../util/SortOrder";

export type SalaryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  paymentDate?: SortOrder;
  amount?: SortOrder;
  employeeId?: SortOrder;
};
