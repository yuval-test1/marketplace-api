import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CounterServiceBase } from "./base/counter.service.base";

@Injectable()
export class CounterService extends CounterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
