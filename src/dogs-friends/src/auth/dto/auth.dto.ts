import { EnderecoDto } from "./endereco.dto";
import { Endereco } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;

    @IsString()
    @IsNotEmpty()
    nome?: string;

    @IsString()
    @IsNotEmpty()
    sobrenome?: string;

    @IsString()
    cpf?: string

    @IsString()
    fotoPerfil?: string


    @IsNotEmpty()
    isPasseador?: boolean

    @IsNotEmpty()
    enderecoId?: Endereco["id"]

   
    @IsNotEmpty()
    enderecos: EnderecoDto 
    

}

