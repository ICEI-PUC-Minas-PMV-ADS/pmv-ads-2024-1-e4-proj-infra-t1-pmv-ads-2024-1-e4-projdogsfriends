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
    const user = await this.prisma.cliente.update({
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
        enderecos: {
          create: {
            logradouro: dto.enderecos.logradouro,
            numero: dto.enderecos.numero,
            bairro: dto.enderecos.bairro,
            cidade: dto.enderecos.cidade,
            uf: dto.enderecos.uf,
            cep: dto.enderecos.cep,
          },
        },
        telefones: {
          create: {
            codigo: dto.telefones.codigo,
            numero: dto.telefones.numero,
          },
        },
      },
    });

    delete user.senha;

    return user;
  }

  async findAll() {
    return this.prisma.cliente.findMany({
      select: {
        id: true,
        email: true,
        nome: true,
        sobrenome: true,
      },
    });
  }

  async findClientePasseador(id: string) {
    try {
      const cliente = await this.prisma.cliente.findUnique({
        where: { id },
        select: {
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

  private handleExeptions(error: any) {
    if (error.code === 'P2025') throw new NotFoundException();
    throw new InternalServerErrorException();
  }
}
