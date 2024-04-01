import { Test, TestingModule } from '@nestjs/testing';
import { AgendaPasseadorService } from './agenda-passeador.service';

describe('AgendaPasseadorService', () => {
  let service: AgendaPasseadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendaPasseadorService],
    }).compile();

    service = module.get<AgendaPasseadorService>(AgendaPasseadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
