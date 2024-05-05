import { Module } from '@nestjs/common';
import { PetRepository } from './repositories/PetRepository';
import { PetService } from './services/pet.service';
import { PrismaService } from '../prisma/service/prisma.service';
import { PetController } from './controllers/pet.controller';

@Module({ providers: [PetRepository, PetService, PrismaService,], controllers: [PetController] })
export class PetModule { }
