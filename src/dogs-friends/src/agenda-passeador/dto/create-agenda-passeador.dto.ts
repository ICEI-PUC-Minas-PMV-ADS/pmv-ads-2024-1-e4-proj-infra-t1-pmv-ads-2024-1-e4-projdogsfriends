import { Prisma } from "@prisma/client";
import { AgendaPasseador } from "../entities/agenda-passeador.entity";

export class CreateAgendaPasseadorDto extends AgendaPasseador{
    data: string;
    hora: string;
    ativo?: boolean;
    passeadorId: string;
    pedido?: Prisma.PedidoUncheckedCreateNestedManyWithoutAgendaPasseadorInput;
}
