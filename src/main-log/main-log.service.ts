import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MainLogService {
  private readonly pattern;
  constructor(@Inject('Get-Log') private propertys) {
    this.pattern = this.propertys.pattern;
  }

  logThePattern(): string {
    return this.pattern;
  }
}
