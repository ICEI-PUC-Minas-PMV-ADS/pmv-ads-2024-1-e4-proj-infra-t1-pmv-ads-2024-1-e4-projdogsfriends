import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/service/prisma.service';
import { PetRepository } from '../repositories/PetRepository';
import { petMock } from '../__mocks__/pet.mock';
import { faker } from '@faker-js/faker';
import { NotFoundException } from '@nestjs/common';

describe('PetService', () => {
  let service: PetRepository;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetRepository, {
        provide: PrismaService,
        useValue:{
          pet:{
            create: jest.fn().mockReturnValue(petMock[0]),
            findUnique: jest.fn().mockReturnValue(petMock[0])
          }
        },
      }],
    }).compile();

    service = module.get<PetRepository>(PetRepository);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prisma).toBeDefined();
  });

  it('should create a new pet', async () => {
    const response = await service.create(petMock[0])  
    expect(response).toBe(petMock[0]);
    expect(prisma.pet.create).toHaveBeenCalledWith({
      data: petMock[0]
    })
  })

  it('should return a pet', async()=>{
    const id = faker.string.uuid()
    const response = await service.findOne(id)
    expect(response).toEqual(petMock[0])
  })

  it('should return not found message, if pet not found', async() =>{
    const id = faker.string.uuid()
    jest.spyOn(prisma.pet, "findUnique").mockResolvedValue(null)  

    await expect( service.findOne(id)).rejects.toThrow(new NotFoundException('Pet not found'))
  })

  
});

