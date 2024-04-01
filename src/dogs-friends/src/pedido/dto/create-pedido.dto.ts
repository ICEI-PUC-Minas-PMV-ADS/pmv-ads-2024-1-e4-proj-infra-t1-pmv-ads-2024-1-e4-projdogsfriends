import { Prisma } from "@prisma/client";
import { Pedido } from "../entities/pedido.entity";
import { PedidoPet } from "../../pedido-pet/entities/pedido-pet.entity";

export class CreatePedidoDto extends Pedido{
    precoTotal: number;
    agendaPasseadorId: string;
    clienteId: string;
    passeadorId: string;
    passeio?: Prisma.PasseioUncheckedCreateNestedOneWithoutPedidoInput;
    pedidoPet?: Prisma.PedidoPetUncheckedCreateNestedManyWithoutPedidoInput;
    pets: string[]
}
