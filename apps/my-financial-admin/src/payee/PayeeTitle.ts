import { Payee as TPayee } from "../api/payee/Payee";

export const PAYEE_TITLE_FIELD = "id";

export const PayeeTitle = (record: TPayee): string => {
  return record.id?.toString() || String(record.id);
};
