import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { PetDto } from "../dtos/pet.dto";
import { PetService } from "../services/pet.service";

@Controller('pet')
export class PetController {

  constructor(private readonly petService: PetService) { }

  @Post()
  async create(@Body() petdto: PetDto): Promise<any> {
    return this.petService.create(petdto);
  }

  @Get("cliente/:clienteId")
  async petsByClientId(@Param("clienteId", new ParseUUIDPipe()) clienteId: string){
    return this.petService.petsByClientId(clienteId)
  }

  @Get(":id")
   getPet(@Param("id", ParseUUIDPipe) id: string){
    return this.petService.getPet(id)
  }
}
