import { Complaint } from "../complaint/Complaint";
import { CustomerService } from "../customerService/CustomerService";
import { Rental } from "../rental/Rental";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  lastName: string | null;
  phone: string | null;
  firstName: string | null;
  complaints?: Array<Complaint>;
  customerServices?: Array<CustomerService>;
  rentals?: Array<Rental>;
};
