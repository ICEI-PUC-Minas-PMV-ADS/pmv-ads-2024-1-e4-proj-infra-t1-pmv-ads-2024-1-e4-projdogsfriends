import { PrismaService } from "src/prisma/service/prisma.service";
import { AuthDto } from "./dto";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import * as argon from 'argon2';
import { ConfigService } from "@nestjs/config";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private config: ConfigService,  private jwt:JwtService) { }




    async create(dto: AuthDto) {


        const senha = await argon.hash(dto.senha)

        try {



            const cliente = await this.prisma.cliente.create({

                data: {
                    email: dto.email,
                    senha,
                    nome: dto.nome,
                    sobrenome: dto.sobrenome,
                    cpf: dto.cpf,
                    fotoPerfil: dto.fotoPerfil,
                    isPasseador: dto.isPasseador,
                    // enderecos: {
                    //     create: {

                    //         logradouro: dto.enderecos.logradouro,
                    //         numero: dto.enderecos.numero,
                    //         bairro: dto.enderecos.bairro,
                    //         cidade: dto.enderecos.cidade,
                    //         uf: dto.enderecos.uf,
                    //         cep: dto.enderecos.cep
                    //     }
                    // },
                    // telefones: {
                    //     create: {
                    //        codigo: dto.telefones.codigo,
                    //         numero: dto.telefones.numero
                    //     }
                    // }




                },
                select: {

                    email: true,
                }

            })




            return cliente

        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Email já cadastrado')
                }
            } throw error
        }

    }

    async signin(dto: LoginDto) {

        //find user by email
        const user =
            await this.prisma.cliente.findUnique({
                where: {
                    email: dto.email,
                },

            });

        //if user does not exist, throw an error
        if (!user)
            throw new ForbiddenException('Credentials not valid');
        //compare password
        const pwMatches = await argon.verify(user.senha, dto.senha);
        if (!pwMatches)
            throw new ForbiddenException('Credentials not valid');
        //return a message



        delete user.senha
        return this.signToken(user.id, user.email);

    }

    async signToken(
        clienteId: string,
        email: string,
    ): Promise<{ access_token: string }> {
        const payload = {
            sub: clienteId,
            email,
        };

        const secret = this.config.get('JWT_SECRET');

        const token = await this.jwt.signAsync(
            payload, {
            expiresIn: '15m',
            secret: secret,
        })



        return {

            access_token: token
        }

    }


    }