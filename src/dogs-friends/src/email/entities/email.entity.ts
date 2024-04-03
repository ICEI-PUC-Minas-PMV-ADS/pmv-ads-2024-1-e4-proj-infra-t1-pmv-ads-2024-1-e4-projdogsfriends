import { SenderDto } from "../dto/sender-dto";

export class Email {
   
    body: string;    
    subject: string;     
    receivers: SenderDto[];
}
