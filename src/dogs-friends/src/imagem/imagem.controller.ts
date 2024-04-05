import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagemService } from './imagem.service';
import { CreateImagemDto } from './dto/create-imagem.dto';
import { UpdateImagemDto } from './dto/update-imagem.dto';
import { CreateImagensDto } from './dto/create-imagens.dto';

@Controller('imagem')
export class ImagemController {
  constructor(private readonly imagemService: ImagemService) {}

  @Post()
  create(@Body() createImagemsDto: CreateImagensDto) {
    return this.imagemService.create(createImagemsDto);
  }

  @Get()
  findAll() {
    return this.imagemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagemService.findOne(id);
  }
 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagemService.remove(id);
  }
}
