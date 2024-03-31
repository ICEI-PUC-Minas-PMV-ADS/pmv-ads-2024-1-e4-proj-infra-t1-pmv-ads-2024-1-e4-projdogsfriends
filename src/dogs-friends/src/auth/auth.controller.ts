import { Body, Controller, Post } from "@nestjs/common";
import { AuthDto, EnderecoDto } from "./dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('create')
    create(@Body() authDto: AuthDto) {
        return this.authService.create(authDto);
    }
}