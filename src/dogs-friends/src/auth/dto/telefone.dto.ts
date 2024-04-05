import { IsEmpty, IsInt, IsString } from "class-validator";

export class TelefoneDto{
    
    id: string;
    
    @IsEmpty()
    @IsString()
    codigo: string;
    
    @IsEmpty()
    @IsString()
    numero: string;

}