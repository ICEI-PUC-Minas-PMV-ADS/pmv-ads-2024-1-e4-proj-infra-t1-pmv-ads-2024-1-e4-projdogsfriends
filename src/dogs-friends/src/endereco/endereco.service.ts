import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { PrismaService } from 'src/prisma/service/prisma.service';

@Injectable()
export class EnderecoService {
  constructor(private readonly prisma: PrismaService){}

  create(createEnderecoDto: CreateEnderecoDto) {
    return this.prisma.endereco.create({data: createEnderecoDto});
  }

  findAll() {
    return `This action returns all endereco`;
  }

  findOne(id: number) {
    return `This action returns a #${id} endereco`;
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return `This action updates a #${id} endereco`;
  }

  remove(id: number) {
    return `This action removes a #${id} endereco`;
  }
}
