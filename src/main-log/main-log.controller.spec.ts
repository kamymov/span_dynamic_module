import { Test, TestingModule } from '@nestjs/testing';
import { MainLogController } from './main-log.controller';

describe('MainLogController', () => {
  let controller: MainLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainLogController],
    }).compile();

    controller = module.get<MainLogController>(MainLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
