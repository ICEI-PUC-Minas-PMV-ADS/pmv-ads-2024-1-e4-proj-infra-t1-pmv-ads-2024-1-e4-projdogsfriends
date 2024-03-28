import { PrismaService } from "src/prisma/service/prisma.service";
import { AuthDto } from "./dto";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){}
    async create(dto:AuthDto){
        try{
            const cliente = await this.prisma.cliente.create({
                data:{
                    email: dto.email,
                    senha: dto.senha,
                    nome: dto.nome,
                    sobrenome: dto.sobrenome,
                    cpf: dto.cpf,
                    fotoPefil: dto.fotoPerfil,
                    uf: dto.uf,
                    cidade: dto.cidade,
                    bairro: dto.bairro,
                    logradouro: dto.logradouro,
                    numero: dto.numero,
                    isPasseador: dto.isPasseador,
                    

                    
                },
                
            })
        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2002'){
                    throw new ForbiddenException('Email já cadastrado')
                }
            }throw error
        }
        
    }
}