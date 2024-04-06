import { Injectable } from "@nestjs/common";
import { PetDto } from "../dtos/pet.dto";
import { PetEntity } from "../entities/pet.entity";
import { PetRepository } from "../repositories/PetRepository";

@Injectable()
export class PetService {
  constructor(private readonly petRepository: PetRepository) { }
  async create(petdto: PetDto): Promise<PetEntity> {
    return this.petRepository.create(petdto);
  }
}
