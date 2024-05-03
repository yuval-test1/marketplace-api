import { Salary } from "../salary/Salary";
import { Branch } from "../branch/Branch";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  salary: number | null;
  lastName: string | null;
  position: string | null;
  salaries?: Array<Salary>;
  branch?: Branch | null;
};
