import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/service/prisma.service";
import { PetDto } from "../dtos/pet.dto";
import { PetEntity } from "../entities/pet.entity";


@Injectable()
export class PetRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(petDto: PetDto): Promise<any> {
    return this.prisma.pet.create({
      data: petDto
    })
  }
}

