import { Customer } from "../customer/Customer";

export type Complaint = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateFiled: Date | null;
  description: string | null;
  customer?: Customer | null;
};
