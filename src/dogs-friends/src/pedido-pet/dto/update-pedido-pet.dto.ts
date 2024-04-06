import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoPetDto } from './create-pedido-pet.dto';

export class UpdatePedidoPetDto extends PartialType(CreatePedidoPetDto) {}
