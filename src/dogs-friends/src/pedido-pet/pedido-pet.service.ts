import { Injectable } from '@nestjs/common';
import { CreatePedidoPetDto } from './dto/create-pedido-pet.dto';
import { UpdatePedidoPetDto } from './dto/update-pedido-pet.dto';

@Injectable()
export class PedidoPetService {
  create(createPedidoPetDto: CreatePedidoPetDto) {
    return 'This action adds a new pedidoPet';
  }

  findAll() {
    return `This action returns all pedidoPet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidoPet`;
  }

  update(id: number, updatePedidoPetDto: UpdatePedidoPetDto) {
    return `This action updates a #${id} pedidoPet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidoPet`;
  }
}
