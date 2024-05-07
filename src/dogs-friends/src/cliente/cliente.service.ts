/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/service/prisma.service';
import { EditClienteDto } from './dto';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async editCliente(clienteId: string, dto: EditClienteDto) {
    try {
      const cliente = await this.prisma.cliente.findUnique({
        where: {
          id: clienteId,
        },
        include: {
          telefones: true,
          enderecos: true,
        },
      });
  
      if (!cliente) {
        throw new Error('Cliente não encontrado');
      }
  
      // Atualiza os campos do cliente
      const updatedCliente = await this.prisma.cliente.update({
        where: {
          id: clienteId,
        },
        data: {
          email: dto.email,
          nome: dto.nome,
          sobrenome: dto.sobrenome,
          cpf: dto.cpf,
          fotoPerfil: dto.fotoPerfil,
          isPasseador: dto.isPasseador,
          sobreMim: dto.sobreMim,
        },
      });
  
      // Atualiza os telefones existentes
      for (const telefone of cliente.telefones) {
        await this.prisma.telefone.update({
          where: {
            id: telefone.id,
          },
          data: {
            codigo: dto.telefones.codigo,
            numero: dto.telefones.numero,
          },
        });
      }
  
      // Atualiza os endereços existentes
      for (const endereco of cliente.enderecos) {
        await this.prisma.endereco.update({
          where: {
            id: endereco.id,
          },
          data: {
            logradouro: dto.enderecos.logradouro,
            numero: dto.enderecos.numero,
            bairro: dto.enderecos.bairro,
            cidade: dto.enderecos.cidade,
            uf: dto.enderecos.uf,
            cep: dto.enderecos.cep,
          },
        });
      }
  
      return updatedCliente;
    } catch (error) {
      throw error;
    }
  }


  async getCliente(id: string) {
    try {
      return await this.prisma.cliente.findUnique({
        where: {id},
        select:{
          id: true,
          nome: true,
          sobrenome:true,
          sobreMim:true,
          fotoPerfil:true,
          email:true,
          enderecos: true,
          favCliente: {
            select:{
              passeadorId:true,
              passeador:{
                select:{
                  nome: true,
                  sobrenome: true,
                  fotoPerfil: true,
                  enderecos: {
                    select: {
                      uf:true,
                      cidade: true
                    }
                  }
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

  async findAll() {
    return this.prisma.cliente.findMany(
      {
        select: {
          id: true,
          nome: true,
          sobrenome: true,
          sobreMim: true,
          fotoPerfil: true,
          enderecos: {
            select: {
              uf: true,
              cidade: true,
              bairro: true,
              logradouro: true,
              numero: true,
              cep: true,
            },
            
          },
          telefones:{
            select:{
              codigo:true,
              numero:true
            }
          }
        },
      }

    );
  }

  async findMe(email: string){
    return await this.prisma.cliente.findUnique({
      where:{email},
      select:{
        id:true,
        nome:true,
        sobrenome:true,
        sobreMim:true,
        fotoPerfil:true,
        email:true,
        enderecos:{
          select:{
            uf:true,
            cidade:true,
            bairro:true,
            logradouro:true,
            numero:true,
            cep:true
          }
        },
        telefones:{
          select:{
            codigo:true,
            numero:true
          }
        }
      }

    })
  }


  async findClientePasseador(id: string) {
    try {
      const cliente = await this.prisma.cliente.findUnique({
        where: { id },
        select: {
          id: true,
          nome: true,
          sobrenome: true,
          sobreMim: true,
          fotoPerfil: true,
          enderecos: {
            select: {
              uf: true,
              cidade: true,
              bairro: true,
              logradouro: true,
            },
          },
         
          reviews: {
            select: {
              nota: true,
              comentario: true,
              createdAt: true,
              passeio: {
                select: {
                  pedido: {
                    select: {
                      cliente: {
                        select: {
                          nome: true,
                          fotoPerfil: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

      const { reviews, ...rest } = cliente;

      const allReviews = reviews.map((review) => ({
        nota: review.nota,
        comentario: review.comentario,
        createdAt: review.createdAt,
        nomeCliente: review.passeio.pedido.cliente.nome,
        fotoCliente: review.passeio.pedido.cliente.fotoPerfil,
      }));

      rest['reviews'] = allReviews;

      return rest;
    } catch (error) {
      this.handleExeptions(error);
    }
  }

  async search(term: string, estado = 'MG', take = 10, skip = 0) {
    if (isNaN(take) || isNaN(skip))
      return new BadRequestException('limit or offset should be');

    const clientes = await this.prisma.cliente.findMany({
      take,
      skip,

      where: {
        AND: [
          {
            isPasseador: true,
          },
          {
            enderecos: {
              some: {
                OR: [
                  {
                    cidade: {
                      contains: term,
                      mode: 'insensitive',
                    },
                  },
                  {
                    bairro: {
                      contains: term,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
          },
          {
            enderecos: {
              some: {
                uf: {
                  equals: estado,
                },
              },
            },
          },
        ],
      },

      select: {
        id: true,
        nome: true,
        sobrenome: true,
        sobreMim: true,
        fotoPerfil: true,

        enderecos: {
          where: {
            OR: [
              {
                cidade: {
                  contains: term,
                  mode: 'insensitive',
                },
              },
              {
                bairro: {
                  contains: term,
                  mode: 'insensitive',
                },
              },
            ],
            uf: {
              equals: estado,
            },
          },
        },
      },
    });

    return clientes;
  }

  
  async updateFavorite(toogle: boolean, clienteId: string, passeadorId:string){
    
    try {
      if(toogle){
        await this.prisma.favorito.create({
           data:{
            clienteId,
            passeadorId,
           }
         })
         return
       }
       await this.prisma.favorito.delete({
        where:{
         passeadorId
        },
       })
       return
    } catch (error) {
      this.handleExeptions(error)
    }
  }

  private handleExeptions(error: any) {
    if (error.code === 'P2025') throw new NotFoundException();
    throw new InternalServerErrorException();
  }
}
