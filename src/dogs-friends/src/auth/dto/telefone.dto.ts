/* eslint-disable prettier/prettier */
import { IsEmpty, IsString } from 'class-validator';

export class TelefoneDto{
    
    id: string;
    
    @IsEmpty()
    @IsString()
    codigo: string;
    
    @IsEmpty()
    @IsString()
    numero: string;

}