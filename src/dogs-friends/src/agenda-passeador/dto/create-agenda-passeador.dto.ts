import { Prisma } from "@prisma/client";
import { AgendaPasseador } from "../entities/agenda-passeador.entity";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAgendaPasseadorDto extends AgendaPasseador{
    @IsString()
    @IsNotEmpty({
        message: "data should not be empty"
    })
    data: string;
    @IsString()
    @IsNotEmpty()
    hora: string;
    @IsString()
    @IsNotEmpty()
    passeadorId: string;
    
    ativo?: boolean;
    pedido?: Prisma.PedidoUncheckedCreateNestedManyWithoutAgendaPasseadorInput;
}
