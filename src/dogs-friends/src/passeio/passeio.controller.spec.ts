import { Test, TestingModule } from '@nestjs/testing';
import { PasseioController } from './passeio.controller';
import { PasseioService } from './passeio.service';

describe('PasseioController', () => {
  let controller: PasseioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasseioController],
      providers: [PasseioService],
    }).compile();

    controller = module.get<PasseioController>(PasseioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
