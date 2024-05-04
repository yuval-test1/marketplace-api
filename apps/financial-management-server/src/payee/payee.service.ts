import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PayeeServiceBase } from "./base/payee.service.base";

@Injectable()
export class PayeeService extends PayeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
