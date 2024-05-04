import { Module } from "@nestjs/common";
import { ShippingDetailsModuleBase } from "./base/shippingDetails.module.base";
import { ShippingDetailsService } from "./shippingDetails.service";
import { ShippingDetailsController } from "./shippingDetails.controller";
import { ShippingDetailsResolver } from "./shippingDetails.resolver";

@Module({
  imports: [ShippingDetailsModuleBase],
  controllers: [ShippingDetailsController],
  providers: [ShippingDetailsService, ShippingDetailsResolver],
  exports: [ShippingDetailsService],
})
export class ShippingDetailsModule {}
