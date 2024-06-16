import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from "class-validator";
import { AuthDto } from "src/auth/dto";

export class UpdateClienteDto extends PartialType(AuthDto){
    @IsString()
    @IsNotEmpty()
    id: string
}