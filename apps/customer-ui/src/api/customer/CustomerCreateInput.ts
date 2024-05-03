import { ComplaintCreateNestedManyWithoutCustomersInput } from "./ComplaintCreateNestedManyWithoutCustomersInput";
import { CustomerServiceCreateNestedManyWithoutCustomersInput } from "./CustomerServiceCreateNestedManyWithoutCustomersInput";
import { RentalCreateNestedManyWithoutCustomersInput } from "./RentalCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  lastName?: string | null;
  phone?: string | null;
  firstName?: string | null;
  complaints?: ComplaintCreateNestedManyWithoutCustomersInput;
  customerServices?: CustomerServiceCreateNestedManyWithoutCustomersInput;
  rentals?: RentalCreateNestedManyWithoutCustomersInput;
};
