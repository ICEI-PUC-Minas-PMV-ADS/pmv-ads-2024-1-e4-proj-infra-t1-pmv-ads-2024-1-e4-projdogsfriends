import { faker } from "@faker-js/faker";
import { Prisma } from "@prisma/client";

export const agendaPasseadorCreateMock: Prisma.AgendaPasseadorUncheckedCreateInput = {
    data: "10/04/204",
    hora: "10h00",
    passeadorId: faker.string.uuid()
}