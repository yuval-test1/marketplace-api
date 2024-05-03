import { Module } from "@nestjs/common";
import { SalaryModuleBase } from "./base/salary.module.base";
import { SalaryService } from "./salary.service";
import { SalaryController } from "./salary.controller";
import { SalaryResolver } from "./salary.resolver";

@Module({
  imports: [SalaryModuleBase],
  controllers: [SalaryController],
  providers: [SalaryService, SalaryResolver],
  exports: [SalaryService],
})
export class SalaryModule {}
