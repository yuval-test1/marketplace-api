import { Customer } from "../customer/Customer";

export type Rental = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date | null;
  branch: string | null;
  endDate: Date | null;
  customer?: Customer | null;
};
