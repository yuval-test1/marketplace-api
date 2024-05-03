import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalaryService } from "./salary.service";
import { SalaryControllerBase } from "./base/salary.controller.base";

@swagger.ApiTags("salaries")
@common.Controller("salaries")
export class SalaryController extends SalaryControllerBase {
  constructor(protected readonly service: SalaryService) {
    super(service);
  }
}
