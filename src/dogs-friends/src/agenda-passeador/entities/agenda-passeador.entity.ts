import { Prisma } from "@prisma/client";

export class AgendaPasseador implements Prisma.AgendaPasseadorUncheckedCreateInput{
    id?: string;
    data: string;
    hora: string;
    ativo?: boolean;
    passeadorId: string;
    pedido?: Prisma.PedidoUncheckedCreateNestedManyWithoutAgendaPasseadorInput;
}
