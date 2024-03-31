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
                    fotoPerfil: dto.fotoPerfil,
                    isPasseador: dto.isPasseador,
                    enderecos:{
                        create:{
                            
                            logradouro: dto.enderecos.logradouro,
                            numero: dto.enderecos.numero,
                            bairro: dto.enderecos.bairro,
                            cidade: dto.enderecos.cidade,
                            uf: dto.enderecos.uf,
                            cep: dto.enderecos.cep
                        }
                    }
                    

                    
                },
                select:{
                    
                    email:true,
                }
                
            })

         
            

            return cliente

        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2002'){
                    throw new ForbiddenException('Email já cadastrado')
                }
            }throw error
        }
        
    }
}