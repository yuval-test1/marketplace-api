import { Module } from "@nestjs/common";
import { CollectorModuleBase } from "./base/collector.module.base";
import { CollectorService } from "./collector.service";
import { CollectorController } from "./collector.controller";
import { CollectorResolver } from "./collector.resolver";

@Module({
  imports: [CollectorModuleBase],
  controllers: [CollectorController],
  providers: [CollectorService, CollectorResolver],
  exports: [CollectorService],
})
export class CollectorModule {}
