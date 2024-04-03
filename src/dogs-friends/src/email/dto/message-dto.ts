import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { SenderDto } from "./sender-dto";
import { Type } from "class-transformer";

export class MessageDto {
    
    @IsString()
    @IsNotEmpty()
    body: string;

    
    @IsString()
    @IsNotEmpty()
    subject: string;

     
    @IsArray()
    @IsNotEmpty()
    @ValidateNested({each: true})
    @Type(() => SenderDto)
    receivers: SenderDto;

    constructor(body, subject, receivers){
        this.body = body
        this.subject = subject
        this.receivers = receivers
    }
}