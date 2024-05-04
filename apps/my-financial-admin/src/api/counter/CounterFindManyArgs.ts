import { CounterWhereInput } from "./CounterWhereInput";
import { CounterOrderByInput } from "./CounterOrderByInput";

export type CounterFindManyArgs = {
  where?: CounterWhereInput;
  orderBy?: Array<CounterOrderByInput>;
  skip?: number;
  take?: number;
};
