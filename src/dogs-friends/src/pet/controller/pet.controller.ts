import { Body, Controller, Post } from "@nestjs/common";
import { PetService } from "../service/pet.service";

@Controller('pet')
export class PetController {

  constructor(private readonly petService: PetService) { }
  @Post()
  async create(@Body() pet): Promise<any> {

    return this.petService.create(pet);
  }

}
