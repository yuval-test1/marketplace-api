import { Module } from "@nestjs/common";
import { CounterModuleBase } from "./base/counter.module.base";
import { CounterService } from "./counter.service";
import { CounterController } from "./counter.controller";
import { CounterResolver } from "./counter.resolver";

@Module({
  imports: [CounterModuleBase],
  controllers: [CounterController],
  providers: [CounterService, CounterResolver],
  exports: [CounterService],
})
export class CounterModule {}
