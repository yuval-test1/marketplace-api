import { Counter as TCounter } from "../api/counter/Counter";

export const COUNTER_TITLE_FIELD = "id";

export const CounterTitle = (record: TCounter): string => {
  return record.id?.toString() || String(record.id);
};
