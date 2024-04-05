import { Prisma } from "@prisma/client";

export class Imagem implements Prisma.ImagemUncheckedCreateInput{
    id?: string;
    url: string;
    petId: string;
}
