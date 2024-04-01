import { EnderecoDto } from "./endereco.dto";
import { Endereco, Telefone } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { TelefoneDto } from "./telefone.dto";

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

    @IsOptional()
    fotoPerfil?: string


    @IsNotEmpty()
    isPasseador?: boolean

  
   

   
    @IsNotEmpty()
    enderecos?: EnderecoDto 

    @IsNotEmpty()
    telefones?: TelefoneDto

}

