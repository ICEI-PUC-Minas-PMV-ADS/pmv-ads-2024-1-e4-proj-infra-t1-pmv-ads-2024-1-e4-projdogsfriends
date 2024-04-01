import { Module } from '@nestjs/common';
import { PedidoPetService } from './pedido-pet.service';
import { PedidoPetController } from './pedido-pet.controller';

@Module({
  controllers: [PedidoPetController],
  providers: [PedidoPetService],
})
export class PedidoPetModule {}
