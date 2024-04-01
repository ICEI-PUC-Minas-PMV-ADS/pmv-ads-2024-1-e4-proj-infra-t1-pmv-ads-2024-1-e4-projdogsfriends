import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { EditEnderecoDto } from "./edit-endereco.dto";
import { EnderecoDto, TelefoneDto } from "../../auth/dto";

export class EditClienteDto{
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
    enderecos: EnderecoDto 

    @IsNotEmpty()
    telefones: TelefoneDto

}