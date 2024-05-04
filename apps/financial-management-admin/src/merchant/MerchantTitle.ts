import { Merchant as TMerchant } from "../api/merchant/Merchant";

export const MERCHANT_TITLE_FIELD = "id";

export const MerchantTitle = (record: TMerchant): string => {
  return record.id?.toString() || String(record.id);
};
