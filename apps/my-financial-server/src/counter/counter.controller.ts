import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CounterService } from "./counter.service";
import { CounterControllerBase } from "./base/counter.controller.base";

@swagger.ApiTags("counters")
@common.Controller("counters")
export class CounterController extends CounterControllerBase {
  constructor(protected readonly service: CounterService) {
    super(service);
  }
}
