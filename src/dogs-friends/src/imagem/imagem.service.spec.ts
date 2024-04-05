import { Test, TestingModule } from '@nestjs/testing';
import { ImagemService } from './imagem.service';

describe('ImagemService', () => {
  let service: ImagemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagemService],
    }).compile();

    service = module.get<ImagemService>(ImagemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
