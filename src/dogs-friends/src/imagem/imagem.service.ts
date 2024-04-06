import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateImagemDto } from './dto/create-imagem.dto';
import { UpdateImagemDto } from './dto/update-imagem.dto';
import { PrismaService } from 'src/prisma/service/prisma.service';
import { CreateImagensDto } from './dto/create-imagens.dto';

@Injectable()
export class ImagemService {
  constructor(private readonly prisma: PrismaService){}

  async create(createImagensDto: CreateImagensDto) {
  
    const pet = await this.prisma.pet.findUnique({
      where:{id: createImagensDto.imagens[0].petId},
    })
    
    if(!pet) throw new NotFoundException('Pet not found')   
  
    try {
      return await this.prisma.imagem.createMany({data: createImagensDto.imagens})
    } catch (error) {
      throw new InternalServerErrorException()
    }
     
  }

  async findAll() {
    try {
      return await this.prisma.imagem.findMany({})
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.imagem.findUnique({
        where:{ id }
      });
    } catch (error) {
      this.handleExeptions(error)
    }
  }

   
  async remove(id: string) {
   try {
      await this.prisma.imagem.delete({
      where:{id}
    });
   } catch (error) {
    this.handleExeptions(error)
   }
  }
  private handleExeptions(error: any){
    if(error.code === "P2025") throw new NotFoundException()
    throw new InternalServerErrorException()
  }
}
