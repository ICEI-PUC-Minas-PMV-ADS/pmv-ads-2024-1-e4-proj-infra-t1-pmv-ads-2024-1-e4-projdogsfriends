import { Prisma } from "@prisma/client";

export class Pedido implements Prisma.PedidoUncheckedCreateInput {
    id?: string;
    precoTotal: number;
    agendaPasseadorId: string;
    clienteId: string;
    passeadorId: string;
    passeio?: Prisma.PasseioUncheckedCreateNestedOneWithoutPedidoInput;
    pedidoPet?: Prisma.PedidoPetUncheckedCreateNestedManyWithoutPedidoInput;
 
}
