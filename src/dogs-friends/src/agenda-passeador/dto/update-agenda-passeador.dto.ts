import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateAgendaPasseadorDto {
   
    @IsString()
    @IsNotEmpty()
    data: string;
    @IsString()
    @IsNotEmpty()
    hora: string;

    @IsString()
    @IsNotEmpty()
    passeadorId: string;

}
