import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth.service';
import { PrismaService } from '../../prisma/service/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { createUserMock } from '../__mocks__/auth.createUser.mock';
import { ForbiddenException } from '@nestjs/common/exceptions';


describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;
  let configService: ConfigService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService,
        {
          provide: PrismaService,
          useValue:{
            cliente:{
              create: jest.fn().mockReturnValue(createUserMock.email),
              findUnique: jest.fn().mockResolvedValueOnce(createUserMock.email)
            }
          },
        },
        {
          provide: ConfigService,
          useValue:{ }
        },
        {
          provide: JwtService,
          useValue:{ }
        }
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
    configService = module.get<ConfigService>(ConfigService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prisma).toBeDefined();
  });

  it('should create a new user', async () => {
    const cliente = await service.create(createUserMock);
    await expect(cliente).toEqual(createUserMock.email)
  })

  it('should return throw exception when create fail', async() => {
    jest.spyOn(prisma.cliente, "create").mockRejectedValueOnce(new Error())
    await expect(service.create(createUserMock)).rejects.toThrow()
  })
  


});
