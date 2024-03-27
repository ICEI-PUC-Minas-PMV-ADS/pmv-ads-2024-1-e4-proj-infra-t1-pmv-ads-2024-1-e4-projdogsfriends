import { Body, Controller, Post } from "@nestjs/common";
import { PetDto } from "../dtos/pet.dto";
import { PetService } from "../services/pet.service";

@Controller('pet')
export class PetController {

  constructor(private readonly petService: PetService) { }

  @Post()
  async create(@Body() petdto: PetDto): Promise<any> {
    return this.petService.create(petdto);
  }

}
