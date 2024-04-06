import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../prisma/service/prisma.service';
import { EmailService } from 'src/email/email.service';
import { MessageDto } from 'src/email/dto/message-dto';
import { EMAIL_MESSAGE } from 'constants/email';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService,
    private readonly emailService: EmailService){}
  
  async create(createPedidoDto: CreatePedidoDto) {
     
    const { pets, ...pedido } = createPedidoDto
    try {
      
      const pedidoResult = await this.prisma.pedido.create({
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
                
        },
        select:{
          cliente:{
            select:{
              id: true,
              nome: true,
              sobrenome: true,
            }
          },
          agendaPasseador:{
            select:{
              id: true,
              data: true,
              hora: true,
            }
          },
          pedidoPet:{
            select:{
              pet: {
                select:{
                  id: true,
                  nome: true,
                  idade: true,
                }
              }
            }
          },
          passeadorId: true
        }
      
      });
      
     // this.sendEmailToPasseador(pedidoResult.passeadorId)
      
      return pedidoResult;

      } catch (error) {
        throw new InternalServerErrorException()
      }
  }

  async findAll() {
    return await this.prisma.pedido.findMany({
      include:{
        cliente: {
          select:{
            nome: true,
            sobrenome: true,
            email: true,
          }
        },    
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
        agendaPasseador:true,

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


  private async sendEmailToPasseador(passeadorId: string){
   try {
      const passeador = await this.prisma.cliente.findUnique({
        where:{ id: passeadorId },
        select:{ email: true }
      })

      console.log(passeador.email)

      const mensagem = new MessageDto(
        EMAIL_MESSAGE.BODY,
        EMAIL_MESSAGE.SUBJECT,
      passeador.email);
      
      await this.emailService.sendEmail(mensagem);
   } catch (error) {
    this.handleExeptions(error)
   }
    
  }

  private handleExeptions(error: any){
    if(error.code === "P2025") throw new NotFoundException()
    throw new InternalServerErrorException()
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}