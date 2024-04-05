import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthService } from './auth/auth.service';
import { Authmodule } from './auth/auth.module';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';
import { PedidoPetModule } from './pedido-pet/pedido-pet.module';
import { AgendaPasseadorModule } from './agenda-passeador/agenda-passeador.module';
import { EnderecoModule } from './endereco/endereco.module';
import { PasseioModule } from './passeio/passeio.module';
import { EmailModule } from './email/email.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
    PetModule, PrismaModule, Authmodule, ClienteModule, PedidoModule, PedidoPetModule, AgendaPasseadorModule, EnderecoModule, PasseioModule, EmailModule, ReviewModule],
  
})
export class AppModule { }
