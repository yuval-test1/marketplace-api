import { Module } from "@nestjs/common";
import { PayeeModuleBase } from "./base/payee.module.base";
import { PayeeService } from "./payee.service";
import { PayeeController } from "./payee.controller";
import { PayeeResolver } from "./payee.resolver";

@Module({
  imports: [PayeeModuleBase],
  controllers: [PayeeController],
  providers: [PayeeService, PayeeResolver],
  exports: [PayeeService],
})
export class PayeeModule {}
