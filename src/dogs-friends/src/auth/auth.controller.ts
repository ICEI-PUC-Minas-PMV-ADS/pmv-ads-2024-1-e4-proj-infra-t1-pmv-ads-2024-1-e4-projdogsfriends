import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthDto } from './dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('create')
  create(@Body() authDto: AuthDto) {
    return this.authService.create(authDto);
  }

  @Post('login')
  signin(@Body() dto: LoginDto) {
    console.log(dto)
    return this.authService.signin(dto);
  }

  @Get('teste')
  teste(){
    return {msg: "teste"}
  }
}
