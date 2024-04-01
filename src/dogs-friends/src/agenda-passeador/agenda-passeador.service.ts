import { Injectable } from '@nestjs/common';
import { CreateAgendaPasseadorDto } from './dto/create-agenda-passeador.dto';
import { UpdateAgendaPasseadorDto } from './dto/update-agenda-passeador.dto';
import { PrismaService } from '../prisma/service/prisma.service';

@Injectable()
export class AgendaPasseadorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAgendaPasseadorDto: CreateAgendaPasseadorDto) {
    return await this.prisma.agendaPasseador.create({data: createAgendaPasseadorDto});
  }

  findAll() {
    return `This action returns all agendaPasseador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agendaPasseador`;
  }

  update(id: number, updateAgendaPasseadorDto: UpdateAgendaPasseadorDto) {
    return `This action updates a #${id} agendaPasseador`;
  }

  remove(id: number) {
    return `This action removes a #${id} agendaPasseador`;
  }
}
