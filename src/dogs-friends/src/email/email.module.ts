import { DynamicModule, Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { EMAIL_CONFIG_OPTIONS } from 'constants/email';
import { EmailConfig } from './email-config';
 

@Module({
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {
  static register(options: EmailConfig): DynamicModule {
    return{
      module: EmailModule,
      controllers: [EmailController],
      providers: [
        {
          provide: EMAIL_CONFIG_OPTIONS,
          useValue: options
        },
        EmailService
      ],
      exports:[EmailService],
    }
  }
}
