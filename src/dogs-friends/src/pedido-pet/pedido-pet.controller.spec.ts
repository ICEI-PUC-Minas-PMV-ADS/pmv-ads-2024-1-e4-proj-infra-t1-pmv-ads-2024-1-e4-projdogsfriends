import { Test, TestingModule } from '@nestjs/testing';
import { PedidoPetController } from './pedido-pet.controller';
import { PedidoPetService } from './pedido-pet.service';

describe('PedidoPetController', () => {
  let controller: PedidoPetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidoPetController],
      providers: [PedidoPetService],
    }).compile();

    controller = module.get<PedidoPetController>(PedidoPetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
