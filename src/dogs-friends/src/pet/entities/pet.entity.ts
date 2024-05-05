import { Pet } from "@prisma/client";

export class PetEntity implements Pet {
  id: string;
  nome: string;
  idade: number;
  peso: number;
  raca: string;
  clienteId: string;
  passeadorId: string;
  pedidoId: string;
}
