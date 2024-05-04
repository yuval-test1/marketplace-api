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
  ShippingDetails as PrismaShippingDetails,
} from "@prisma/client";

export class ShippingDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ShippingDetailsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.shippingDetails.count(args);
  }

  async shippingDetailsItems<T extends Prisma.ShippingDetailsFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShippingDetailsFindManyArgs>
  ): Promise<PrismaShippingDetails[]> {
    return this.prisma.shippingDetails.findMany<Prisma.ShippingDetailsFindManyArgs>(
      args
    );
  }
  async shippingDetails<T extends Prisma.ShippingDetailsFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShippingDetailsFindUniqueArgs>
  ): Promise<PrismaShippingDetails | null> {
    return this.prisma.shippingDetails.findUnique(args);
  }
  async createShippingDetails<T extends Prisma.ShippingDetailsCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShippingDetailsCreateArgs>
  ): Promise<PrismaShippingDetails> {
    return this.prisma.shippingDetails.create<T>(args);
  }
  async updateShippingDetails<T extends Prisma.ShippingDetailsUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShippingDetailsUpdateArgs>
  ): Promise<PrismaShippingDetails> {
    return this.prisma.shippingDetails.update<T>(args);
  }
  async deleteShippingDetails<T extends Prisma.ShippingDetailsDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShippingDetailsDeleteArgs>
  ): Promise<PrismaShippingDetails> {
    return this.prisma.shippingDetails.delete(args);
  }
}
