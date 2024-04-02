import { Prisma } from "@prisma/client";

export class Endereco implements Prisma.EnderecoUncheckedCreateInput{
    id?: string;
    uf: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    numero: string;
    cep: string;
    clienteId: string;
}
