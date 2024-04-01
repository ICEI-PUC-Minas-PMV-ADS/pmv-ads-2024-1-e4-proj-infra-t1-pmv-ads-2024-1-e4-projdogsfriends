import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../prisma/service/prisma.service';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService){}
  
  async create(createPedidoDto: CreatePedidoDto) {
     
    const { pets, ...pedido } = createPedidoDto
    
    return await this.prisma.pedido.create({
      data: {
        ...pedido,       

        pedidoPet: {
          createMany: {
            data: pets.map(petId => ({
              petId
            }))
          }
        },

        passeio:{
          create:{
            realizado: false
          }
        }
               
      }
    
    })
  }

  async findAll() {
    return await this.prisma.pedido.findMany({
      include:{
        cliente: true,    
        agendaPasseador: true,
      }
    })
  }

  async findOne(id: string) {
    return this.prisma.pedido.findUnique({
      where:{
        id
      },
      select:{
        clienteId:false,
        passeadorId:true,
        agendaPasseador:false,

        cliente:{
          select:{
            id: true,
            nome: true,
            sobrenome: true,
            email: true,
          }
        }
        
      },
       
    })
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
