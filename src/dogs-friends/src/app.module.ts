import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
    PetModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
