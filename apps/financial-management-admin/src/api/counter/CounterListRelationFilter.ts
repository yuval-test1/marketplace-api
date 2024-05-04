import { CounterWhereInput } from "./CounterWhereInput";

export type CounterListRelationFilter = {
  every?: CounterWhereInput;
  some?: CounterWhereInput;
  none?: CounterWhereInput;
};
