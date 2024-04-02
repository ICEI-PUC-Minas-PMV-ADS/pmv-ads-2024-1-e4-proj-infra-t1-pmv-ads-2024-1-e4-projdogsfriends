import { Test, TestingModule } from '@nestjs/testing';
import { AgendaPasseadorService } from '../agenda-passeador.service';
import { PrismaService } from '../../prisma/service/prisma.service';
import { agendaPasseadorCreateMock } from '../__mocks__/agendaPasseadorCreate.mock';
import { BadRequestException } from '@nestjs/common';

describe('AgendaPasseadorService', () => {
  let service: AgendaPasseadorService;
  let prisma: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendaPasseadorService,
      {
        provide: PrismaService,
        useValue: {
          agendaPasseador:{
            create: jest.fn().mockReturnValue(agendaPasseadorCreateMock)
          }
        }
      }],
    }).compile();

    service = module.get<AgendaPasseadorService>(AgendaPasseadorService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prisma).toBeDefined();
  });

  it('should create new agenda to agendaPasseador', async()=>{
    const agenda = await service.create(agendaPasseadorCreateMock);
    expect(agenda).toEqual(agendaPasseadorCreateMock)
  })

 
});
