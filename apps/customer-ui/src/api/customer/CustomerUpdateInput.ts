import { ComplaintUpdateManyWithoutCustomersInput } from "./ComplaintUpdateManyWithoutCustomersInput";
import { CustomerServiceUpdateManyWithoutCustomersInput } from "./CustomerServiceUpdateManyWithoutCustomersInput";
import { RentalUpdateManyWithoutCustomersInput } from "./RentalUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  lastName?: string | null;
  phone?: string | null;
  firstName?: string | null;
  complaints?: ComplaintUpdateManyWithoutCustomersInput;
  customerServices?: CustomerServiceUpdateManyWithoutCustomersInput;
  rentals?: RentalUpdateManyWithoutCustomersInput;
};
