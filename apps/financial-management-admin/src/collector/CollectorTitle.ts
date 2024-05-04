import { Collector as TCollector } from "../api/collector/Collector";

export const COLLECTOR_TITLE_FIELD = "id";

export const CollectorTitle = (record: TCollector): string => {
  return record.id?.toString() || String(record.id);
};
