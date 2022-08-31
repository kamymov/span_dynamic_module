import { Controller, Get } from '@nestjs/common';
import { MainLogService } from './main-log.service';

@Controller('main-log')
export class MainLogController {
  constructor(private readonly mainLogService: MainLogService) {}

  @Get('')
  logThePattern() {
    const response = this.mainLogService.logThePattern();
    return console.log(response);
  }
}
