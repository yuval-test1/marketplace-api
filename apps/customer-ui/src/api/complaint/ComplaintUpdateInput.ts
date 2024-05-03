import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ComplaintUpdateInput = {
  dateFiled?: Date | null;
  description?: string | null;
  customer?: CustomerWhereUniqueInput | null;
};
