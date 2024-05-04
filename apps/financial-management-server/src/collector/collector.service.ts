import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollectorServiceBase } from "./base/collector.service.base";

@Injectable()
export class CollectorService extends CollectorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
