import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/service/prisma.service";
import { PetDto } from "../dtos/pet.dto";
import { PetEntity } from "../entities/pet.entity";


@Injectable()
export class PetRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(petDto: PetDto): Promise<any> {
    const {imagens, ...pet} = petDto
    return this.prisma.pet.create({
      data: {
        ...pet,
        imagens:{
          create: imagens.map(imagem => (
            imagem
          ))
        }
      }
    })
  }

  async findOne(id: string) {
    try {
      const pet = await this.prisma.pet.findUnique({
        where: {
          id
        },
        select:{
          id:true,
          nome: true,
          idade: true,
          peso: true,
          clienteId: true,

          imagens:true
        }
      });
      if(!pet)  return new NotFoundException('Pet not found')
      return pet  
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async petsByClientId(clienteId: string){
    return this.prisma.pet.findMany({
      where: {clienteId},
      
      select:{
        id: true,
        nome: true,
        idade: true,
        peso:true,
        
        imagens:{
          select:{
            url: true
          }
        }
      }
    })
  }
}
