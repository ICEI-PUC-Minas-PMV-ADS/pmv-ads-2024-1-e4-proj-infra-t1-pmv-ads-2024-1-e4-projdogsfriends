import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgendaPasseadorDto } from './dto/create-agenda-passeador.dto';
import { UpdateAgendaPasseadorDto } from './dto/update-agenda-passeador.dto';
import { PrismaService } from '../prisma/service/prisma.service';


@Injectable()
export class AgendaPasseadorService {
  constructor(private readonly prisma: PrismaService) {}
  

  async create(createAgendaPasseadorDto: CreateAgendaPasseadorDto) {
    try{
      return await this.prisma.agendaPasseador.create({
        data: createAgendaPasseadorDto,
        select:{
          data: true,
          hora: true,
          id: true,
        }
      });
    }catch(error){
      throw new BadRequestException("invalid parameters")
    }

  }

  findAll() {
    return this.prisma.agendaPasseador.findMany({});
  }

  findOne(id: string) {

    const agenda = this.prisma.agendaPasseador.findUnique({
      where: {id}
    });

    if(!agenda) throw new NotFoundException('agenda não encontrada...')

    return agenda;
  }

  update(id: string, updateAgendaPasseadorDto: UpdateAgendaPasseadorDto) {
    return `This action updates a #${id} agendaPasseador`;
  }

  remove(id: string) {
    return `This action removes a #${id} agendaPasseador`;
  }
}
