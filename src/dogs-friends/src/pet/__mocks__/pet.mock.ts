import { faker } from "@faker-js/faker";
import { Prisma } from "@prisma/client";


export const petMock = [
    {
        nome: "Scooby",
        idade: 5,
        peso: 7,
        raca: "Vira Lata",
        clienteId: faker.string.uuid()
    },
    {
        nome: "Pipoca",
        idade: 4,
        peso: 8,
        raca: "Vira Lata",
        clienteId: faker.string.uuid()
    },
]