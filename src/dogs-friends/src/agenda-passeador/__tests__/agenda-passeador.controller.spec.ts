import { Test, TestingModule } from '@nestjs/testing';
import { AgendaPasseadorController } from '../agenda-passeador.controller';
import { AgendaPasseadorService } from '../agenda-passeador.service';
import { PrismaService } from '../../prisma/service/prisma.service';
import { agendaPasseadorCreateMock } from '../__mocks__/agendaPasseadorCreate.mock';
import { CreateAgendaPasseadorDto } from '../dto/create-agenda-passeador.dto';

describe('AgendaPasseadorController', () => {
  let controller: AgendaPasseadorController;
  let prisma: PrismaService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendaPasseadorController],
      providers: [AgendaPasseadorService, {
        provide: PrismaService,
        useValue:{
          
        }
      }],
    }).compile();

    controller = module.get<AgendaPasseadorController>(AgendaPasseadorController);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(prisma).toBeDefined();
  });

  it('should throw an error if valid dto is provided', async() => {
    agendaPasseadorCreateMock.data = null;
    const invalidDto: Partial<CreateAgendaPasseadorDto> = agendaPasseadorCreateMock
    try{
      await controller.create(invalidDto as CreateAgendaPasseadorDto)
    }catch(error){
      expect(error.response.statusCode).toEqual(400)
      expect(error.response.message).toContain('invalid parameters')
    }
  })

  // it('should throw when CreateAgendaPasseadorDto invalid parameters provided', ()=> {
    
  // })

});
