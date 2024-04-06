import { faker } from "@faker-js/faker/locale/pt_BR";
import { Prisma } from "@prisma/client";

export const createUserMock: Prisma.ClienteUncheckedCreateInput = {
    nome: faker.person.firstName(),
    sobrenome: faker.person.lastName(),
    cpf: "93365565544",
    email: faker.internet.email(),
    senha: faker.internet.password()
}