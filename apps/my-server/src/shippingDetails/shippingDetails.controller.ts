import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShippingDetailsService } from "./shippingDetails.service";
import { ShippingDetailsControllerBase } from "./base/shippingDetails.controller.base";

@swagger.ApiTags("shippingDetails")
@common.Controller("shippingDetails")
export class ShippingDetailsController extends ShippingDetailsControllerBase {
  constructor(protected readonly service: ShippingDetailsService) {
    super(service);
  }
}
