import { Module } from '@nestjs/common';
import { PasseioService } from './passeio.service';
import { PasseioController } from './passeio.controller';

@Module({
  controllers: [PasseioController],
  providers: [PasseioService],
})
export class PasseioModule {}
