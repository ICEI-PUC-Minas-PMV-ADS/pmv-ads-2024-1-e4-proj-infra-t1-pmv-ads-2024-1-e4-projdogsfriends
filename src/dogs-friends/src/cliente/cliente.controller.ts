/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Put, Query, UseGuards, Patch } from "@nestjs/common";
import { ClienteService } from "./cliente.service";
import { EditClienteDto } from "./dto";
import { GetUser } from "../decorador";
import { Cliente, Endereco } from "@prisma/client";
import { JwtGuard } from "../auth/guard";
import { TelefoneDto } from "src/auth/dto/telefone.dto";
import { EnderecoDto } from "src/auth/dto";
import { Email } from "src/email/entities/email.entity";


@UseGuards(JwtGuard)
@Controller('cliente')
export class ClienteController {
    constructor(private  clienteService: ClienteService) {}

    @Put('edit')
    editUser(
      @GetUser('id') clienteId: string,
      @Body() dto: EditClienteDto,
    ) {
      return this.clienteService.editCliente(clienteId, dto);
    }

    @Get('all')
    getUsers(@GetUser()cliente){

    return  this.clienteService.findAll();
  }

  @Get('me')
  getMe(@GetUser()cliente){
    return this.clienteService.findMe(cliente.email);

  }

  

    @Get('passeador/:id')
    getPasseador(@Param('id', new ParseUUIDPipe()) id: string ){
      return this.clienteService.findClientePasseador(id)
    }
 
    @Get(":term:estado:take:skip")
    search(
      @Query('term') term: string,
      @Query('estado') estado: string,
      @Query('limit') limit: number = 10,
      @Query('offset') offset: number = 0
      
      ){
         
     return this.clienteService.search(term, estado, +limit, +offset)
    }

    
}