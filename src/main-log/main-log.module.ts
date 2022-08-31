import { DynamicModule, Module } from '@nestjs/common';
import { MainLogController } from './main-log.controller';
import { MainLogService } from './main-log.service';

@Module({
  controllers: [MainLogController],
  providers: [MainLogService],
})
export class MainLogModule {
  static getLog(propertys): DynamicModule {
    return {
      module: MainLogModule,
      providers: [
        {
          provide: 'Get-Log',
          useValue: propertys,
        },
        MainLogService,
      ],
      exports: [MainLogService],
    };
  }
}
