import { Prisma } from "@prisma/client";

export class Passeio implements Prisma.PasseioUncheckedCreateInput {
    id?: string;
    realizado?: boolean;
    pedidoId: string;
}
