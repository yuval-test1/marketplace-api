/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Salary as PrismaSalary,
  Employee as PrismaEmployee,
} from "@prisma/client";

export class SalaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SalaryCountArgs, "select">): Promise<number> {
    return this.prisma.salary.count(args);
  }

  async salaries<T extends Prisma.SalaryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SalaryFindManyArgs>
  ): Promise<PrismaSalary[]> {
    return this.prisma.salary.findMany<Prisma.SalaryFindManyArgs>(args);
  }
  async salary<T extends Prisma.SalaryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SalaryFindUniqueArgs>
  ): Promise<PrismaSalary | null> {
    return this.prisma.salary.findUnique(args);
  }
  async createSalary<T extends Prisma.SalaryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SalaryCreateArgs>
  ): Promise<PrismaSalary> {
    return this.prisma.salary.create<T>(args);
  }
  async updateSalary<T extends Prisma.SalaryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SalaryUpdateArgs>
  ): Promise<PrismaSalary> {
    return this.prisma.salary.update<T>(args);
  }
  async deleteSalary<T extends Prisma.SalaryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SalaryDeleteArgs>
  ): Promise<PrismaSalary> {
    return this.prisma.salary.delete(args);
  }

  async getEmployee(parentId: string): Promise<PrismaEmployee | null> {
    return this.prisma.salary
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }
}
