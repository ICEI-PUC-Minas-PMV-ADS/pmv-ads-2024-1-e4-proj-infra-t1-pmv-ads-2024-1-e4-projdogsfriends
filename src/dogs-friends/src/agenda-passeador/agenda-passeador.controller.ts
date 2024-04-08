import { Controller, Get,  Body, Patch, Param, Delete, Post, ParseUUIDPipe, ParseBoolPipe } from '@nestjs/common';
import { AgendaPasseadorService } from './agenda-passeador.service';
import { CreateAgendaPasseadorDto } from './dto/create-agenda-passeador.dto';
import { UpdateAgendaPasseadorDto } from './dto/update-agenda-passeador.dto';

@Controller('agenda-passeador')
export class AgendaPasseadorController {
  constructor(private readonly agendaPasseadorService: AgendaPasseadorService) {}

  @Post()
  create(@Body() createAgendaPasseadorDto: CreateAgendaPasseadorDto) {
    return this.agendaPasseadorService.create(createAgendaPasseadorDto);
  }
  @Post(':id')
  changeStatus(@Param('id', new ParseUUIDPipe()) id: string , @Body('status',new ParseBoolPipe()) status: boolean){
    console.log(id, status)
    return this.agendaPasseadorService.changeStatus(id, status)
  }

  @Get('agenda/:passeadorId')
  findAll(@Param('passeadorId', new ParseUUIDPipe()) passeadorId: string) {
    return this.agendaPasseadorService.findAll(passeadorId);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.agendaPasseadorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgendaPasseadorDto: UpdateAgendaPasseadorDto) {
    return this.agendaPasseadorService.update(id, updateAgendaPasseadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agendaPasseadorService.remove(id);
  }
}
