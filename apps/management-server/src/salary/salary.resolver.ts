import * as graphql from "@nestjs/graphql";
import { SalaryResolverBase } from "./base/salary.resolver.base";
import { Salary } from "./base/Salary";
import { SalaryService } from "./salary.service";

@graphql.Resolver(() => Salary)
export class SalaryResolver extends SalaryResolverBase {
  constructor(protected readonly service: SalaryService) {
    super(service);
  }
}
