import { ShippingDetails as TShippingDetails } from "../api/shippingDetails/ShippingDetails";

export const SHIPPINGDETAILS_TITLE_FIELD = "id";

export const ShippingDetailsTitle = (record: TShippingDetails): string => {
  return record.id?.toString() || String(record.id);
};
