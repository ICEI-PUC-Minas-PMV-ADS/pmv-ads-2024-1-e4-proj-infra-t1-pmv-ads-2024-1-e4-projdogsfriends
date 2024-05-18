import { Imagem } from "@prisma/client";

export interface PetDto {
  nome: string;
  idade: number;
  peso: number;
  raca: string;
  clienteId: string;
  imagens?: Imagem[]
  //passeadorId: string;
  //pedidoId: string;
}
