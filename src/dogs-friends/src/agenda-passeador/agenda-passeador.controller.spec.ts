import { Test, TestingModule } from '@nestjs/testing';
import { AgendaPasseadorController } from './agenda-passeador.controller';
import { AgendaPasseadorService } from './agenda-passeador.service';

describe('AgendaPasseadorController', () => {
  let controller: AgendaPasseadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendaPasseadorController],
      providers: [AgendaPasseadorService],
    }).compile();

    controller = module.get<AgendaPasseadorController>(AgendaPasseadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
