import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ComplaintCreateInput = {
  dateFiled?: Date | null;
  description?: string | null;
  customer?: CustomerWhereUniqueInput | null;
};
