import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoPetService } from './pedido-pet.service';
import { CreatePedidoPetDto } from './dto/create-pedido-pet.dto';
import { UpdatePedidoPetDto } from './dto/update-pedido-pet.dto';

@Controller('pedido-pet')
export class PedidoPetController {
  constructor(private readonly pedidoPetService: PedidoPetService) {}

  @Post()
  create(@Body() createPedidoPetDto: CreatePedidoPetDto) {
    return this.pedidoPetService.create(createPedidoPetDto);
  }

  @Get()
  findAll() {
    return this.pedidoPetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoPetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoPetDto: UpdatePedidoPetDto) {
    return this.pedidoPetService.update(+id, updatePedidoPetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoPetService.remove(+id);
  }
}
