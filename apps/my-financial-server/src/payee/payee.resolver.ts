import * as graphql from "@nestjs/graphql";
import { PayeeResolverBase } from "./base/payee.resolver.base";
import { Payee } from "./base/Payee";
import { PayeeService } from "./payee.service";

@graphql.Resolver(() => Payee)
export class PayeeResolver extends PayeeResolverBase {
  constructor(protected readonly service: PayeeService) {
    super(service);
  }
}
