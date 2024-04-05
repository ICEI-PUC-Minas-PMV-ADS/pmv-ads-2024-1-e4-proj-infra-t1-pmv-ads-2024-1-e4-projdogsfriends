import { IsNotEmpty, IsString } from "class-validator";
import { CreateImagemDto } from "./create-imagem.dto";
import { Type } from "class-transformer";

export class CreateImagensDto{
 @Type(() => CreateImagemDto)   
 imagens: CreateImagemDto[]
}
