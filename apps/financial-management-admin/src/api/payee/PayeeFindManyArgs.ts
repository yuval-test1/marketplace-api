import { PayeeWhereInput } from "./PayeeWhereInput";
import { PayeeOrderByInput } from "./PayeeOrderByInput";

export type PayeeFindManyArgs = {
  where?: PayeeWhereInput;
  orderBy?: Array<PayeeOrderByInput>;
  skip?: number;
  take?: number;
};
