import { Inject, Injectable } from '@nestjs/common';
import { EMAIL_CONFIG_OPTIONS } from 'constants/email';
import * as nodemailer from 'nodemailer';
import { EmailConfig, GMAIL_CONFIG } from './email-config';
import { MessageDto } from './dto/message-dto';


@Injectable()
export class EmailService {
  private options: EmailConfig = {
    from: GMAIL_CONFIG.from,
    password: GMAIL_CONFIG.password,
    service: GMAIL_CONFIG.service,
  }

  constructor( ){}

async sendEmail(message: MessageDto){
    const trasporter = nodemailer.createTransport({
        service: this.options.from,
        auth: {
            user: this.options.from,
            pass: this.options.password
        }
    });

  try{
 
    const mailOptions = {
        from: this.options.from,
        to: message.receivers,
        subject: message.subject,
        html: message.body
    }
     
   return await trasporter.sendMail(mailOptions)
  }catch(err){
    console.log(err)
    return null;
  }
}
}
