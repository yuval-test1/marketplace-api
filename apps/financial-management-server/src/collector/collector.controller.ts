import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollectorService } from "./collector.service";
import { CollectorControllerBase } from "./base/collector.controller.base";

@swagger.ApiTags("collectors")
@common.Controller("collectors")
export class CollectorController extends CollectorControllerBase {
  constructor(protected readonly service: CollectorService) {
    super(service);
  }
}
