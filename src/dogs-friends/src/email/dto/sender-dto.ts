import { IsEmail, IsNotEmpty } from "class-validator";

export class SenderDto{
    
    @IsEmail()
    @IsNotEmpty()
    email:string
}