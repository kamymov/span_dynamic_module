import { Module } from '@nestjs/common';
import { MainLogModule } from './main-log/main-log.module';

@Module({
  imports: [
    MainLogModule.getLog({ pattern: 'This is a Test for dynamic modules' }),
  ],
})
export class AppModule {}
