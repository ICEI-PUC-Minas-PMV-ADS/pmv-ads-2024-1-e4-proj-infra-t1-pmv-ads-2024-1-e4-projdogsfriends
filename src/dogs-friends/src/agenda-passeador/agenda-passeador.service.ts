import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAgendaPasseadorDto } from './dto/create-agenda-passeador.dto';
import { UpdateAgendaPasseadorDto } from './dto/update-agenda-passeador.dto';
import { PrismaService } from '../prisma/service/prisma.service';
import { AgendaPasseador } from './entities/agenda-passeador.entity';


@Injectable()
export class AgendaPasseadorService {
  constructor(private readonly prisma: PrismaService) {}
  
  private readonly _select = {
    data: true,
    hora: true,
    ativo: true,
    id: true,
    passeadorId: true
  }

  async create(createAgendaPasseadorDto: CreateAgendaPasseadorDto) {
    try{
      return await this.prisma.agendaPasseador.create({
        data: createAgendaPasseadorDto,
        select: this._select
      });
    }catch(error){
      throw new BadRequestException("invalid parameters")
    }

  }

  async findAll(passeadorId: string) {
    try {
      return await this.prisma.agendaPasseador.findMany({
        where:{passeadorId}
      });
    } catch (error) {
      throw new InternalServerErrorException('Unable to complete this action')
    }
  }

  async findOne(id: string) {

    try {
      return await this.prisma.agendaPasseador.findUnique({
        where: {id},
        select: this._select
      });
    } catch (error) {
      this.handleExeptions(error)
    }
  }

  async update(id: string, updateAgendaPasseadorDto: UpdateAgendaPasseadorDto): Promise<AgendaPasseador> {
   // if(id !== updateAgendaPasseadorDto.id) throw new BadRequestException('Parametros invalidos')

   try {
    return await this.prisma.agendaPasseador.update({
      where:{
        id
      }, data: updateAgendaPasseadorDto,

      select: this._select
    })
   } catch (error) {
    this.handleExeptions(error)
   }
  }

  async remove(id: string) {
    try {
      await this.prisma.agendaPasseador.delete({
        where:{ id }
      })      
    } catch (error) {
      this.handleExeptions(error)
    }
  }
  
  async changeStatus(id: string, status: boolean){
    try {
      
      return await this.prisma.agendaPasseador.update({
        where:{
          id
        }, data:{
          ativo: !status
        },
  
        select: this._select
      })
     } catch (error) {
      this.handleExeptions(error)
     }
    }
  
  private handleExeptions(error: any){
    if(error.code === "P2025") throw new NotFoundException()
    throw new InternalServerErrorException()
  }
}
