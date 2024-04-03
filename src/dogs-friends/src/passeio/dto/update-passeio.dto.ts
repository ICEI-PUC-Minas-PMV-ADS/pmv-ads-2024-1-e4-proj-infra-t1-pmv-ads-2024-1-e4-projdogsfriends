import { PartialType } from '@nestjs/mapped-types';
import { CreatePasseioDto } from './create-passeio.dto';

export class UpdatePasseioDto extends PartialType(CreatePasseioDto) {}
