import { Test, TestingModule } from '@nestjs/testing';
import { PasseioService } from './passeio.service';

describe('PasseioService', () => {
  let service: PasseioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasseioService],
    }).compile();

    service = module.get<PasseioService>(PasseioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
