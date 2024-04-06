import { PartialType } from '@nestjs/mapped-types';
import { CreateImagemDto } from './create-imagem.dto';

export class UpdateImagemDto extends PartialType(CreateImagemDto) {}
