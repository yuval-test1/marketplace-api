import { Rental as TRental } from "../api/rental/Rental";

export const RENTAL_TITLE_FIELD = "branch";

export const RentalTitle = (record: TRental): string => {
  return record.branch?.toString() || String(record.id);
};
