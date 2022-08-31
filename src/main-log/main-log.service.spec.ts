import { Test, TestingModule } from '@nestjs/testing';
import { MainLogService } from './main-log.service';

describe('MainLogService', () => {
  let service: MainLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainLogService],
    }).compile();

    service = module.get<MainLogService>(MainLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
