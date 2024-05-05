import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class Favorito{
    @IsNotEmpty()
    @IsBoolean()
    toogle: boolean;

    @IsNotEmpty()
    @IsString()
    clienteId: string;

    @IsNotEmpty()
    @IsString()
    passeadorId: string;
}