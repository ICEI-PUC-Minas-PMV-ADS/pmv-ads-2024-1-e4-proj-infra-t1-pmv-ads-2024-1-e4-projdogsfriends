import { IsNotEmpty, IsString } from "class-validator";
import { Imagem } from "../entities/imagem.entity";

export class CreateImagemDto extends Imagem{
    @IsNotEmpty()
    @IsString()
    url: string;

    @IsNotEmpty()
    @IsString()
    petId: string;
    
}
