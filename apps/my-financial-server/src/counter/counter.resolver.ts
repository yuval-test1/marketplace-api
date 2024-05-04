import * as graphql from "@nestjs/graphql";
import { CounterResolverBase } from "./base/counter.resolver.base";
import { Counter } from "./base/Counter";
import { CounterService } from "./counter.service";

@graphql.Resolver(() => Counter)
export class CounterResolver extends CounterResolverBase {
  constructor(protected readonly service: CounterService) {
    super(service);
  }
}
