import * as graphql from "@nestjs/graphql";
import { ShippingDetailsResolverBase } from "./base/shippingDetails.resolver.base";
import { ShippingDetails } from "./base/ShippingDetails";
import { ShippingDetailsService } from "./shippingDetails.service";

@graphql.Resolver(() => ShippingDetails)
export class ShippingDetailsResolver extends ShippingDetailsResolverBase {
  constructor(protected readonly service: ShippingDetailsService) {
    super(service);
  }
}
