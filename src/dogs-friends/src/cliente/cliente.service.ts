import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/service/prisma.service";
import { EditClienteDto } from "./dto";


@Injectable()
export class ClienteService {
    constructor(private prisma: PrismaService) { }

    async editCliente(
        clienteId: string,
        dto: EditClienteDto,
    ) {
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
                        cep: dto.enderecos.cep
                    }

                   
                },
                telefones: {
                    create: {
                        codigo: dto.telefones.codigo,
                        numero: dto.telefones.numero
                    }
                }



            },
        });

        delete user.senha;

        return user;
    }
   
    async findAll() {
        return this.prisma.cliente.findMany({
          select:{
            id:true,
            email:true,
            nome:true,
            sobrenome:true,
          }
        });
      }


    async search(term:string, estado="MG"){
     
      const clientes = await this.prisma.cliente.findMany({
            where:{
              AND: [
                {
                    enderecos:{
                        some:{
                            cidade:{
                                contains: term,
                                mode: 'insensitive',
                            }
                        }
                    },
                },
                {
                    enderecos:{
                        some:{
                            uf:{
                                equals: estado
                            },                            
                        }
                    }
                }
              ]
            },
            
            select:{
                id: true,
                nome: true,
                sobrenome: true,

                enderecos:{
                    where:{
                        cidade:{
                            contains: term,
                            mode: 'insensitive'
                        },
                        uf: {
                            equals: estado
                        }
                    }
                }
            },
        })
         
        return clientes;
    }
}