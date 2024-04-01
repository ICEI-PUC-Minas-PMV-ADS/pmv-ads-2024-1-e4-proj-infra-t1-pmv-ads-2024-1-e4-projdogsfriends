import { PartialType } from '@nestjs/mapped-types';
import { CreateAgendaPasseadorDto } from './create-agenda-passeador.dto';

export class UpdateAgendaPasseadorDto extends PartialType(CreateAgendaPasseadorDto) {}
