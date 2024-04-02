import { Body, Controller, Get, Param, Put, Query, UseGuards } from "@nestjs/common";
import { ClienteService } from "./cliente.service";
import { EditClienteDto } from "./dto";
import { GetUser } from "../decorador";
import { Cliente } from "@prisma/client";
import { JwtGuard } from "../auth/guard";

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
    getMe(@GetUser()cliente: Cliente){
        return cliente;
    }
 
    @Get(":term")
    search(@Query() term: { term: string}){
     console.log(term) 
     return this.clienteService.search(term.term)
    }

    
}