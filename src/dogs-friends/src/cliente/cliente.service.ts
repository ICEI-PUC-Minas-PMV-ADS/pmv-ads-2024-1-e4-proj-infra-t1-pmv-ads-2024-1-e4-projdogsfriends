import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/service/prisma.service";
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


}