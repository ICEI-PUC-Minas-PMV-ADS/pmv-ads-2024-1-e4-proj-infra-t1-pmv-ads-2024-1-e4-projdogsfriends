import { Endereco } from "../entities/endereco.entity";

export class CreateEnderecoDto extends Endereco{
    uf: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    numero: string;
    cep: string;
    clienteId: string;
}
