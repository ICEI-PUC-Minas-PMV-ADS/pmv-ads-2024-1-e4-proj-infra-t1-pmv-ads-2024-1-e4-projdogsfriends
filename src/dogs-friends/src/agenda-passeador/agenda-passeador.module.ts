import { Module } from '@nestjs/common';
import { AgendaPasseadorService } from './agenda-passeador.service';
import { AgendaPasseadorController } from './agenda-passeador.controller';
import { PrismaService } from '../prisma/service/prisma.service';

@Module({
  controllers: [AgendaPasseadorController],
  providers: [AgendaPasseadorService, PrismaService],
})
export class AgendaPasseadorModule {}
