import { Test, TestingModule } from '@nestjs/testing';
import { PedidoPetService } from './pedido-pet.service';

describe('PedidoPetService', () => {
  let service: PedidoPetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidoPetService],
    }).compile();

    service = module.get<PedidoPetService>(PedidoPetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
