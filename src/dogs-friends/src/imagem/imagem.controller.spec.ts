import { Test, TestingModule } from '@nestjs/testing';
import { ImagemController } from './imagem.controller';
import { ImagemService } from './imagem.service';

describe('ImagemController', () => {
  let controller: ImagemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagemController],
      providers: [ImagemService],
    }).compile();

    controller = module.get<ImagemController>(ImagemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
