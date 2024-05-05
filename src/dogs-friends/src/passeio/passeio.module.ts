import { Module } from '@nestjs/common';
import { PasseioService } from './passeio.service';
import { PasseioController } from './passeio.controller';
import { PrismaService } from '../prisma/service/prisma.service';

@Module({
  controllers: [PasseioController],
  providers: [PasseioService, PrismaService],
})
export class PasseioModule {}
