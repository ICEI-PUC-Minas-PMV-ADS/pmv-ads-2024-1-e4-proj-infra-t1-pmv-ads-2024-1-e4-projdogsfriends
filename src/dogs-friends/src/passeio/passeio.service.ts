import { Injectable } from '@nestjs/common';
import { CreatePasseioDto } from './dto/create-passeio.dto';
import { UpdatePasseioDto } from './dto/update-passeio.dto';

@Injectable()
export class PasseioService {
  create(createPasseioDto: CreatePasseioDto) {
    return 'This action adds a new passeio';
  }

  findAll() {
    return `This action returns all passeio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passeio`;
  }

  update(id: number, updatePasseioDto: UpdatePasseioDto) {
    return `This action updates a #${id} passeio`;
  }

  remove(id: number) {
    return `This action removes a #${id} passeio`;
  }
}
