import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UpdatePasseioDto } from './dto/update-passeio.dto';
import { PrismaService } from '../prisma/service/prisma.service';
import { Passeio } from './entities/passeio.entity';

@Injectable()
export class PasseioService {
  constructor(private readonly prisma: PrismaService){} 

  async finishPasseio(id: string): Promise<Passeio>{
   try {
    return await this.prisma.passeio.update({
      where:{id}, 
      data:{ realizado: true }
    })
   } catch (error) {
    this.handleExeptions(error)
   }
  }

  async getPasseio(id: string){
    try {
      return await this.prisma.passeio.findUnique({ 
        where: {id},
        select:{
          id: true,
          realizado: true,
          pedido:{
            select:{
              passeador:{
                select:{
                  id: true,                  
                }
              }
            }
          }
        }
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
