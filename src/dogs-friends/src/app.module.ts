import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [ClientsModule, PetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
