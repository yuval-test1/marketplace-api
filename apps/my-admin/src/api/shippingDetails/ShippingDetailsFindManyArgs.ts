import { ShippingDetailsWhereInput } from "./ShippingDetailsWhereInput";
import { ShippingDetailsOrderByInput } from "./ShippingDetailsOrderByInput";

export type ShippingDetailsFindManyArgs = {
  where?: ShippingDetailsWhereInput;
  orderBy?: Array<ShippingDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
