import * as graphql from "@nestjs/graphql";
import { CollectorResolverBase } from "./base/collector.resolver.base";
import { Collector } from "./base/Collector";
import { CollectorService } from "./collector.service";

@graphql.Resolver(() => Collector)
export class CollectorResolver extends CollectorResolverBase {
  constructor(protected readonly service: CollectorService) {
    super(service);
  }
}
