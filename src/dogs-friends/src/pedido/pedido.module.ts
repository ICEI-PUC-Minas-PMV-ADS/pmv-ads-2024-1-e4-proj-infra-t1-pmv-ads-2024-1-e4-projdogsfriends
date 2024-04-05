import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { PrismaService } from '../prisma/service/prisma.service';
import { EmailModule } from 'src/email/email.module';
import { SERVICE } from 'src/email/email-config';
import { EmailService } from 'src/email/email.service';

@Module({
  imports:[
      EmailModule.register({
      from: 'pbela27360@gmail.com',
      password: 'hpgp rsna ejfx szbb',
      service: SERVICE.GMAIL
    })
  ],
  controllers: [PedidoController],
  providers: [PedidoService, PrismaService, EmailService],
})
export class PedidoModule {}
