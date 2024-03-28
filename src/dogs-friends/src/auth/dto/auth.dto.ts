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

    @IsString()
    uf?: string

    @IsString()
    cidade?: string

    @IsString()
    @IsNotEmpty()
    bairro?: string

    @IsString()
    @IsNotEmpty()
    logradouro?: string


    @IsNotEmpty()
    numero?: number

    @IsNotEmpty()
    isPasseador?: number
}
