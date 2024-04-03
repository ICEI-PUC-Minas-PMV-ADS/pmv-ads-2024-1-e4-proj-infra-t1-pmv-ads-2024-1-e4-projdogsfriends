import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PasseioService } from './passeio.service';
import { CreatePasseioDto } from './dto/create-passeio.dto';
import { UpdatePasseioDto } from './dto/update-passeio.dto';

@Controller('passeio')
export class PasseioController {
  constructor(private readonly passeioService: PasseioService) {}

  @Post()
  create(@Body() createPasseioDto: CreatePasseioDto) {
    return this.passeioService.create(createPasseioDto);
  }

  @Get()
  findAll() {
    return this.passeioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passeioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePasseioDto: UpdatePasseioDto) {
    return this.passeioService.update(+id, updatePasseioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passeioService.remove(+id);
  }
}
