import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PayeeService } from "./payee.service";
import { PayeeControllerBase } from "./base/payee.controller.base";

@swagger.ApiTags("payees")
@common.Controller("payees")
export class PayeeController extends PayeeControllerBase {
  constructor(protected readonly service: PayeeService) {
    super(service);
  }
}
