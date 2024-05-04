import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShippingDetailsServiceBase } from "./base/shippingDetails.service.base";

@Injectable()
export class ShippingDetailsService extends ShippingDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
