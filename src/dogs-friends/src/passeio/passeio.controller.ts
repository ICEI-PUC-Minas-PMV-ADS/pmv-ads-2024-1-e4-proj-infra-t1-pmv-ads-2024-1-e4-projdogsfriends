import { Body, Controller, ParseUUIDPipe, Post} from '@nestjs/common';
import { PasseioService } from './passeio.service';
import { UpdatePasseioDto } from './dto/update-passeio.dto';

@Controller('passeio')
export class PasseioController {
  constructor(private readonly passeioService: PasseioService) {}
 
  @Post("/finish")
  finishPasseio(@Body('id', new ParseUUIDPipe()) id: string){
    return this.passeioService.finishPasseio(id)
  }
}
