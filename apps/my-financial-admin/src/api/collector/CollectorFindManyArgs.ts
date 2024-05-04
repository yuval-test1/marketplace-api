import { CollectorWhereInput } from "./CollectorWhereInput";
import { CollectorOrderByInput } from "./CollectorOrderByInput";

export type CollectorFindManyArgs = {
  where?: CollectorWhereInput;
  orderBy?: Array<CollectorOrderByInput>;
  skip?: number;
  take?: number;
};
